export function getLocalizedMessages(lang: 'ja' | 'en') {
  const messages = {
    en: {
      name: 'Yoshipi',
      work: 'I am a <a href="https://www.udemy.com/user/yoshipi/">Udemy</a> instructor for web programming courses. Having faced several setbacks in my own programming journey, I create courses based on the experience of what I felt I needed most at the time. I also post the introductory parts of my courses and original content on <a href="https://www.youtube.com/@yoshipi">YouTube</a>.',
      hobby:
        'Walking / Traveling / Sauna / Karaoke / Comedy / Anime / Sports / Mahjong / Poker',
      contact: `I have open DMs on <a href="https://x.com/__yoshipi__">X（Twitter</a>, so please feel free to contact me there. However, due to the system's limitations, I may not receive notifications for message requests, so it might take me a little longer to notice your message. If it's urgent, you can either tweet with a mention or, if you're a student, contact me through Udemy's messaging system for a quicker response. I can also provide Udemy coupons, so don't hesitate to reach out.`,
      location:
        "I am Japanese and currently living in Tokyo. If you're in the area, feel free to invite me for a casual coffee or drink!",
    },
    ja: {
      name: 'よしぴー(Yoshipi)',
      work: '<a href="https://www.udemy.com/user/yoshipi/">Udemy</a>でWeb系のプログラミングの講師をしています。私自身がプログラミングを何度か挫折しそうになった経験があり、その経験を元にあの時一番欲しかったなと思う講座を作成するようにしています。<a href="https://www.youtube.com/@yoshipi">YouTube</a>にも講座の冒頭部分やオリジナルコンテンツを投稿しています。',
      hobby: '散歩/旅行/サウナ/カラオケ/お笑い/アニメ/スポーツ/麻雀/ポーカー',
      contact:
        '<a href="https://x.com/__yoshipi__">X（Twitter）</a>のDMを解放していますので、そちらからご連絡いただければと思います。ただし、仕様上メッセージリクエストの通知が届かないため、気づくのが遅れることがあります。もしお急ぎの場合は、メンションを付けてツイートしていただくか、受講生の方はUdemyのメッセージ機能からご連絡いただけると、すぐに確認できます。Udemyのクーポンも発行いたしますので、どうぞお気軽にご連絡ください。',
      location:
        '出身は関西で、現在は東京都内に在住しています。近くにお住まいの方は、ぜひカフェや飲みにでも気軽にお誘いください。',
    },
  };
  return messages[lang];
}
