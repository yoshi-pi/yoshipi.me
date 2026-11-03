// Udemyのクーポンを毎月自動で切り替えるためのユーティリティ
//
// 毎月1日に、各講座で「プレフィックス-YYMM」のコードでカスタム価格クーポンを発行する。
//   例: 2026年12月 → JS-2612 / TS-2612 / VUE-2612
// Udemyのクーポン開始日は太平洋時間なので、月の判定も太平洋時間で行う。

const PREFIX_BY_SLUG: Record<string, string> = {
  'javascript-complete': 'JS',
  'typescript-complete': 'TS',
  'vue-js-complete-guide': 'VUE',
}

// この月より前は、microCMSに入っているリンク（手動発行のクーポン）をそのまま使う
const AUTO_COUPON_START = '2611'

function currentYYMMInPacific(now: Date = new Date()): string {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/Los_Angeles',
    year: '2-digit',
    month: '2-digit',
  }).formatToParts(now)
  const yy = parts.find((p) => p.type === 'year')?.value ?? ''
  const mm = parts.find((p) => p.type === 'month')?.value ?? ''
  return `${yy}${mm}`
}

export function couponCodeFor(slug: string, now: Date = new Date()): string | null {
  const prefix = PREFIX_BY_SLUG[slug]
  if (!prefix) return null
  const yymm = currentYYMMInPacific(now)
  if (yymm < AUTO_COUPON_START) return null
  return `${prefix}-${yymm}`
}

export function withMonthlyCoupon(link: string, now: Date = new Date()): string {
  try {
    const url = new URL(link)
    const slug = url.pathname.match(/^\/course\/([^/]+)/)?.[1]
    if (!slug) return link
    const code = couponCodeFor(slug, now)
    if (!code) return link
    url.searchParams.set('couponCode', code)
    return url.toString()
  } catch {
    return link
  }
}
