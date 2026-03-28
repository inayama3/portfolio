/**
 * ============================================
 * miima ポートフォリオサイト データ管理
 * ============================================
 * このファイルのデータを編集することで、サイトのコンテンツを更新できます。
 * 
 * [更新時のヒント]
 * - 実績を増やす → SITE_DATA.works 配列に新しいオブジェクトを追加
 * - サービスを追加 → SITE_DATA.services 配列に新しいオブジェクトを追加
 * - 経歴を更新 → SITE_DATA.history 配列に新しいオブジェクトを追加
 */

const SITE_DATA = {
  // ─────────────────────────────────
  // ファーストビュー (Hero)
  // ─────────────────────────────────
  hero: {
    catchcopy: "今を撮り、未来を育む。",
    description: "300本超の制作実績による確かな技術力と、1000時間以上の講義実績。企業PV、プロモーション動画、SNSコンテンツ、教育研修まで。あなたの「伝えたい」を映像と実践教育で支援します。",
    cta: [
      { label: "実績を見る", href: "#works", style: "primary" },
      { label: "制作相談をする", href: "#contact", style: "secondary" },
    ],
  },

  // ─────────────────────────────────
  // 制作実績 (Works)
  // ─────────────────────────────────
  worksCategories: [
    { id: "all", label: "すべて" },
    { id: "pv", label: "PV・MV" },
    { id: "event", label: "イベント記録" },
    { id: "interview", label: "インタビュー" },
    { id: "sns", label: "SNSショート動画" },
    { id: "education", label: "教育コンテンツ" },
    { id: "recruit", label: "採用動画" },
  ],

  works: [
    {
      title: "安保瑠輝也 様",
      client: "〇〇スクール",
      genre: "インタビュー",
      category: "interview",
      role: "撮影・編集",
      year: "2025",
      description: "”【緊急】安保瑠輝也、最後のブチギレ「もうおれも限界」”の編集を担当させて頂きました。",
      linkUrl: "https://www.youtube.com/watch?v=BDW0ZZnKdng",
      videoUrl: "",
      thumbnail: "assets/work3.jpg",
    },
    {
      title: "ぶいすぽっ! 様",
      client: "IT企業F",
      genre: "採用動画",
      category: "recruit",
      role: "編集",
      year: "2024",
      description: "\"【？？？】重大告知？！w/べにちゃん,るなちゃん【ぶいすぽっ！/ 藍沢エマ】\"の配信内映像の制作を担当させて頂きました。",
      linkUrl: "https://www.youtube.com/live/i5GyELQ4kkg",
      videoUrl: "",
      thumbnail: "assets/work6.jpg",
    },
    {
      title: "社長のためのマネー講座 様",
      client: "株式会社サンプル",
      genre: "プロモーション映像",
      category: "pv",
      role: "企画・撮影・編集",
      year: "2026",
      description: "㈱グロウアップパートナーズ様のYouTubeチャンネル、”社長のためのマネー講座”を立ち上げ時より制作を担当。累計150本以上を制作",
      linkUrl: "https://www.youtube.com/@TATSUO-UKISHIMA",
      videoUrl: "",
      thumbnail: "assets/work1.png",
    },
    {
      title: "デジハク 様",
      client: "アパレルブランドD",
      genre: "SNS向け短尺",
      category: "sns",
      role: "企画・編集",
      year: "2025",
      description: "”動画編集×SNSで月収10万円を目指す相談者に100万円のビジネス提案”の編集を担当させて頂きました。",
      linkUrl: "https://www.youtube.com/watch?v=IGONMRBUX3U",
      videoUrl: "",
      thumbnail: "assets/work4.jpg",
    },
    {
      title: "みのママのシンプルライフ 様",
      client: "教育法人E",
      genre: "教育コンテンツ",
      category: "education",
      role: "編集",
      year: "2024",
      description: "”【時短でラクする/多用途に使って物を減らせる！】ミニマリスト主婦が買って良かったキッチングッズ６選｜シンプルライフ”の編集を担当させて頂きました。",
      linkUrl: "https://www.youtube.com/watch?v=-fSi0AlHrSA&t=301s",
      videoUrl: "",
      thumbnail: "assets/work5.jpg",
    },
    {
      title: "美和ビッキーズ 様 卒団記念動画",
      client: "〇〇市観光協会",
      genre: "イベント記録",
      category: "event",
      role: "撮影・編集",
      year: "2025",
      description: "愛知県あま市の少年野球チーム、美和ビッキーズ様の2024年卒団記念動画の撮影・編集を担当させて頂きました。",
      linkUrl: "https://www.youtube.com/watch?v=MFZ79i-FwkI",
      videoUrl: "",
      thumbnail: "assets/work2.png",
    },
  ],

  // ─────────────────────────────────
  // 自己紹介 (About)
  // ─────────────────────────────────
  about: {
    profileImage: "assets/profile.png",
    name: "<span style='font-size: 0.8em; font-weight: 500; color: var(--text-secondary);'>代表</span><br>稲山 敬純<span style='font-size: 0.6em; margin-left: 8px; color: var(--text-secondary); font-weight: normal;'>Takazumi Inayama</span>",
    title: "映像クリエイター | 映像講師",
    introduction: "1990年生まれ。愛知県名古屋市出身・在住。<br>大学卒業後、製薬会社で11年間MR(医薬情報担当者)として勤務したのち、映像の道へ進み独立。<br>現在は映像制作業を中心に、専門学校講師としても活動。",
    software: ["Premiere Pro", "After Effects", "Photoshop", "Illustrator", "Capcut", "Canva"],
    equipment: [
      "カメラ: Sony α7 IV, FX30",
      "レンズ: Sony 16-35mm F4 G, TAMRON 28-75mm F/2.8",
      "マイク: RODE Wireless PRO,Wireless ME,VideoMicro",
      "三脚: SmallRig ビデオ三脚 186cm 3751B",
      "照明: Neewer LEDビデオライトキット×2",
    ],
    snsLinks: [
      { name: "X", url: "https://x.com/inayama3", label: "X (@inayama3)", desc: "最新情報や日々のこと", icon: "x" },
      { name: "Instagram", url: "https://www.instagram.com/inayama3", label: "Instagram (@inayama3)", desc: "制作の裏側や作品", icon: "instagram" },
      { name: "Facebook", url: "https://www.facebook.com/inayamat", label: "Facebook (稲山 敬純)", desc: "活動実績や近況などのご報告", icon: "facebook" },
      { name: "note", url: "https://note.com/inayama3", label: "note (@inayama3)", desc: "映像への想いやノウハウまとめ", icon: "note" },
    ],
  },

  // ─────────────────────────────────
  // 経歴・実績 (History & Achievements)
  // ─────────────────────────────────
  history: [
    {
      year: "2025.10",
      title: "<a href='https://www.nagoya-iken.ac.jp/' target='_blank' rel='noopener noreferrer' style='text-decoration: underline; color: inherit;'>名古屋医健スポーツ専門学校</a>の講師に就任",
      description: "",
      type: "blue",
    },
    {
      year: "2025.4",
      title: "<a href='https://www.nagoya-eco.ac.jp/' target='_blank' rel='noopener noreferrer' style='text-decoration: underline; color: inherit;'>名古屋ECO動物海洋専門学校</a>の講師に就任",
      description: "",
      type: "blue",
    },
    {
      year: "2024.10",
      title: "<a href='https://www.vantan-game.com/' target='_blank' rel='noopener noreferrer' style='text-decoration: underline; color: inherit;'>バンタンゲームアカデミー名古屋校</a>の講師に就任",
      description: "",
      type: "blue",
    },
    {
      year: "2024.4",
      title: "<a href='https://www.nca.ac.jp/' target='_blank' rel='noopener noreferrer' style='text-decoration: underline; color: inherit;'>名古屋デザイン＆テクノロジー専門学校</a>の講師に就任",
      description: "",
      type: "blue",
    },
    {
      year: "2023.5",
      title: "映像クリエイターとして活動を開始",
      description: "",
      type: "blue",
    },
    {
      year: "2015.2",
      title: "持田製薬㈱ 入社",
      description: "",
      type: "gray",
    },
    {
      year: "2012.4",
      title: "日本ケミファ㈱ 入社",
      description: "",
      type: "gray",
    },
    {
      year: "2012.3",
      title: "中央大学文学部人文社会学科心理学専攻 卒業",
      description: "",
      type: "gray",
    },
    {
      year: "2008.3",
      title: "愛知県立春日井高等学校 卒業",
      description: "",
      type: "gray",
    },
  ],

  achievements: [
    {
      year: "2025",
      title: "100本以上の動画を制作&専門学校講師として700時間講義",
      description: "",
      type: "red",
    },
    {
      year: "2024",
      title: "企画、撮影、講師業へ事業を拡大",
      description: "",
      type: "red",
    },
    {
      year: "2023",
      title: "動画編集納品本数:100本",
      description: "",
      type: "red",
    },
    {
      year: "2021",
      title: "新製品達成率11位の成績を収める(750名中)",
      description: "<small style='font-size: 0.85em; opacity: 0.8; display: block; margin-top: 4px;'>持田製薬㈱在籍時 MR(医薬情報担当者)として</small>",
      type: "gray",
    },
    {
      year: "2019",
      title: "デジタルカードゲーム”HearthStone”にてインフルエンサーとしてアメリカに招待",
      description: "<small style='font-size: 0.85em; opacity: 0.8; display: block; margin-top: 4px;'><a href='https://ikayama.hatenablog.com/entry/2019/03/06/190000' target='_blank' rel='noopener noreferrer' style='text-decoration: underline; color: inherit;'>当時の様子</a></small>",
      type: "gray",
    },
    {
      year: "2013",
      title: "全製品達成率全社2位の成績を収める(250名中)",
      description: "<small style='font-size: 0.85em; opacity: 0.8; display: block; margin-top: 4px;'>日本ケミファ㈱在籍時 MR(医薬情報担当者)として</small>",
      type: "gray",
    },
  ],

  // ─────────────────────────────────
  // 事業内容 (Services)
  // ─────────────────────────────────
  services: [
    {
      title: "映像企画・構成",
      description: "目的やターゲットに合わせた映像の方向性を企画段階からご提案。ヒアリングを通じて最適な構成を設計します。",
      bgImage: "assets/svc_planning.jpeg",
    },
    {
      title: "撮影",
      description: "ロケーション撮影からスタジオ撮影まで対応。シネマティックな映像美で作品のクオリティを高めます。",
      bgImage: "assets/svc_filming.jpeg",
    },
    {
      title: "編集",
      description: "カット編集からカラーグレーディング、モーショングラフィックスまで。こだわり抜いた編集で価値を最大化します。",
      bgImage: "assets/svc_editing.jpeg",
    },
    {
      title: "映像制作研修・講師",
      description: "累計1000時間超の講義実績を基に、オーダーメイドのカリキュラムを作成。組織の映像制作力を確実に向上させます。",
      bgImage: "assets/svc_learning.jpeg",
    },
    {
      title: "SNSコンテンツ制作・運用",
      description: "300本以上の制作実績。認知拡大から採用強化まで、戦略的なSNS活用を支援。企画・撮影・運用まで一貫対応。",
      bgImage: "assets/svc_SNS.jpeg",
    },
    {
      title: "独自制作体制の構築支援",
      description: "機材選定から人材育成まで伴走支援。状況に合わせた最適な映像制作体制を構築し、持続可能な内製化を支援します。",
      bgImage: "assets/svc_naisei.jpeg",
    },
  ],

  // ─────────────────────────────────
  // お問い合わせ (Contact)
  // ─────────────────────────────────
  contact: {
    heading: "お気軽にご相談ください",
    description: "映像制作のご依頼・ご相談は、下記フォームまたはメールにてお問い合わせください。内容を確認のうえ、通常2営業日以内にご返信いたします。",
    email: "info@miima.net",
    responseTime: "通常2営業日以内にご返信いたします",
    formEndpoint: "https://script.google.com/macros/s/AKfycbzfciO5pDkAli5zo1yX5lK40exF-Gwo-CZMdBE1csKonhbra7qoM5C55KwQ709bLWJ65g/exec",
    sns: [
      { platform: "YouTube", url: "#", icon: "youtube" },
      { platform: "Instagram", url: "#", icon: "instagram" },
      { platform: "X (Twitter)", url: "#", icon: "x" },
    ],
    formCategories: [
      "映像制作のご依頼",
      "お見積りのご相談",
      "講座・セミナーについて",
      "コラボレーションのご提案",
      "その他のお問い合わせ",
    ],
  },

  // ─────────────────────────────────
  // フッター
  // ─────────────────────────────────
  footer: {
    copyright: "© 2026 miima. All rights reserved.",
  },
};
