export function getLocalizedMessages(lang: 'ja' | 'en') {
  const messages = {
    en: {
      name: 'Yoshipi',
      work: 'I am a <a href="https://www.udemy.com/user/yoshipi/">Udemy</a> instructor for web programming courses, primarily for a Japanese audience. Having faced several setbacks in my own programming journey, I create courses based on the experience of what I felt I needed most at the time. I also post the introductory parts of my courses and original content on <a href="https://www.youtube.com/@yoshipi">YouTube</a>.',
      productions:
        '<a href="https://jsontocsvconv.com/">json to csv</a> / <a href="https://echoserver.dev/">echoserver</a> / <a href="https://www.amazon.com/dp/B0DHX2BFZ6">Interval Timer(Alexa Skill)</a>',
      hobby:
        'Walking / Traveling / Sauna / Cooking / Karaoke / Comedy / Anime / Mahjong / Poker / Photography(<a href="https://www.instagram.com/yoshipigram2/">instagram</a>)',
      contact: `My DMs are open on <a href="https://x.com/__yoshipi__">X(Twitter)</a>, so please feel free to contact me there. I can also provide Udemy coupons, so don't hesitate to reach out.`,
      location:
        "I live in Tokyo. If you're in the area, feel free to invite me for a casual coffee or drink!",
    },
    ja: {
      name: 'よしぴー(Yoshipi)',
      work: '<a href="https://www.udemy.com/user/yoshipi/">Udemy</a>でWeb系のプログラミングの講師をしています。私自身がプログラミングを何度か挫折しそうになった経験があり、その経験を元にあの時一番欲しかったなと思う講座を作成するようにしています。<a href="https://www.youtube.com/@yoshipi">YouTube</a>にも講座の冒頭部分やオリジナルコンテンツを投稿しています。',
      productions:
        '<a href="https://jsontocsvconv.com/">json to csv</a> / <a href="https://echoserver.dev/">echoserver</a> / <a href="https://www.amazon.co.jp/dp/B0DHX2BFZ6">インターバルタイマー(Alexa Skill)</a>',
      hobby:
        '散歩/旅行/サウナ/料理/カラオケ/お笑い/アニメ/麻雀/ポーカー/カメラ(<a href="https://www.instagram.com/yoshipigram2/">instagram</a>)',
      contact:
        '<a href="https://x.com/__yoshipi__">X（Twitter）</a>のDMを解放していますので、そちらからご連絡いただければと思います。Udemyのクーポンも発行いたしますので、どうぞお気軽にご連絡ください。',
      location:
        '出身は関西で、現在は東京都内に在住しています。近くにお住まいの方は、ぜひカフェや飲みにでも気軽にお誘いください。',
    },
  }
  return messages[lang]
}
