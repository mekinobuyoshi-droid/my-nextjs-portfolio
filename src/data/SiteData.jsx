export const SiteData = [
            {
        id: 0,
        title: "Top",
        text: "",
        url: "/",
    },
    {
        id: 1,
        title: "About",
        text: "自己紹介のページです。",
        url: "/about",
    },
    {
        id: 2,
        title: "Work",
        text: "これまでに作成した作品集です。",
        url: "/works",
    },
    {
        id: 3,
        title: "Contact",
        text: "連絡先",
        url: "/contact",
    },

];

export const WorksData = [
    {
        id: 1,
        title: "タスク管理アプリ",
        text: "直感的な操作と、期限忘れを物理的に防止する「リマインド通知機能」を搭載したカード型タスク管理アプリ。",
        explanation: [
            {
                heading: "制作の背景",
                content: "Reactの学習の為、様々な機能の実装が必要なタスク管理のアプリを作成しました。"
            },

            {
                heading: "UI/UXの工夫",
                content: "作業の邪魔をしないよう、新規作成や編集はモーダルウィンドウで表示。\nタスクの『アクティブ・完了』もワンボタンで切り替えられるシンプルな設計にしました。"
            },
            {
                heading: "こだわった実装：リマインド機能",
                content: "終了日時をタイムスタンプで管理し、現在時刻との差分をsetIntervalで常に計算。\n期限の数時間前になるとカードが黄色く点滅するロジックを実装しました。\nチェックボタン一つで解除できるUXにもこだわっています。"
            },
        ],
        img: "/work-img01.png",
        url: "https://react-taskmanager-app-2t6l.vercel.app/",
    },
    {
        id: 2,
        title: "Next.js + microCMS",
        text: "Next.jsとmicroCMS（ヘッドレスCMS）を連携させ、実務での運用を想定した企業向けWebサイトのサンプルサイト。",
        explanation: [
            {
                heading: "ヘッドレスCMSによる運用",
                content: "ニュース一覧の管理にはmicroCMSを導入。API連携により、専門知識がなくても管理画面から記事を投稿・更新できる環境を構築し、実際の運用を意識した設計を行いました。"
            },
            {
                heading: "Tailwind CSSでのスタイリング",
                content: "レスポンシブ対応や投稿記事の整形などをスピーディーに実装する事を考え、デザインはTailwind CSSで実装しました。"
            },

            {
                heading: "こだわった実装：動的なパンくずリスト",
                content: "どの階層のページにいても、URLのパスを自動で解析して正しいリンクとラベルを表示する「動的パンくずリスト」を自作しました。手動で更新する手間を省き、ミスが起きないような設計を行いました。"
            },
        ],
        img: "/work-img02.png",
        url: "https://next-plus-microcms.vercel.app/",
    },
    {
      id: 3,
        title: "デザインスクールのLP制作",
        text: "HTML/CSS/JavaScriptのみを使用し、デザインカンプの細部まで忠実に再現した、レスポンシブ対応のランディングページ。",
        explanation: [
            {
                heading: "制作の背景と技術構成",
                content: "ライブラリやフレームワークに頼らず、ピュアなHTML/CSS/JavaScriptのみで制作しました。Webサイトの基本となる構造理解を深めるとともに、現場で求められる「正確なコーディング」の技術を提示することを目的としています。"
            },
            {
                heading: "デザイン再現へのこだわり",
                content: "メインビジュアルの透過レイヤーや、テキストのカーニング（字間）、余白のバランスなど、デザインの意図を汲み取ったコーディングを行いました。ホバー時のアニメーションにはCSS Transitionを活用し、ユーザーにストレスを与えない滑らかな動きを実装しています。"
            },
            {
                heading: "レスポンシブ・運用の効率化",
                content: "全デバイスで表示が崩れないよう、メディアクエリを使用してスマートフォン・タブレット・PCそれぞれに最適化。また、後からの修正が容易になるよう、CSS変数（Custom Properties）を用いてカラーコードや共通の余白を一括管理する工夫をしています。"
            },
        ],
        img: "/work-img03.png",
        url: "https://lp-nine-sooty.vercel.app/",
    },
    {
      id: 4,
        title: "GA4解析レポートアプリ『Arcana』",
        text: "Google Analytics 4の複雑なデータを独自の視点で抽出し、AIによる客観的な評価を可能にした分析ダッシュボード。",
        explanation: [
            {
                heading: "開発の背景と課題解決",
                content: "「GA4の管理画面が複雑で分かりにくい」「データの保持期間が短い」という課題を解決するために企画しました。重要な指標（人数・回数・質・成果）のみを抽出して可視化し、Gemini APIを連携させることで、専門知識がなくても統計に基づいた客観的な改善案を得られる設計にしています。"
            },
            {
                heading: "API制限を回避するデータ設計",
                content: "Google Analytics Data APIの1日あたりのリクエスト制限を考慮し、ユーザーがアクセスする度にAPIを叩くのではなく、中継地点としてSupabase（データベース）を活用。毎日決まった時間にデータを取得・保存し、アプリ側はデータベースを参照することで、表示速度の向上と制限回避を両立させました。"
            },
            {
                heading: "GitHub Actionsによる運用自動化",
                content: "手動更新による運用コストとミスを排除するため、GitHub Actionsを利用したワークフローを構築。毎日深夜にAPIリクエスト用のプログラムを自動実行し、Supabaseへのデータ格納を完全に自動化しています。これにより、常に最新の2日前データに基づいた分析が手間なく行える環境を実現しました。"
            },
        ],
        img: "/work-img04.png",
        url: "https://ga4-analysis.vercel.app/",
    },


];

export const AboutData = {
  name: "目木 伸宜",
  ruby: "めき のぶよし",
  profileText: "印刷業界で12年、Web業界で4年、モノづくりの現場で働いてきました。\n製品として高い品質を求められる業界で培った、「正確に作る力」が私の強みです。\n現在は、ReactやNext.jsといったモダンな開発を学ぶ事で、Webに対して自身の知見を広げるため、フロントエンド技術を習得するために学習に励んでいます。",
  profileImage: "/about-img01.jpg",
  sections: [
    {
      heading: "スキルセット",
      content: "デザインツール：adobe Photoshop / illustrator / figma（学習中）\n開発技術：HTML / CSS / javascript（学習中） / React（学習中） / Next.js（学習中）\nその他：Webディレクション / 工程管理 / ドメイン管理 / 見積作成 / 広告運用など"
    },
    {
      heading: "DTPオペレーターとしての12年",
      content: "印刷物の制作に12年携わってきました。紙器製品やパッケージの製版などを多く手掛けており、立体物を構成する展開図の理解や、0.1mm単位の微細な調整が求められるシビアな要求にも確実に応えていました。"
    },
    {
      heading: "Web制作ディレクションの4年",
      content: "お客様との窓口業務やスケジュールの管理、コーダーさんへの指示出しなど、現場を回す役割を主にしてきました。お客様の要望を理解し、それを形にしていく事にやりがいを感じていました。"
    },
    {
      heading: "プライベートと習慣",
      content: "朝の時間を大切にしています。毎朝5時に起きて1時間スケボーで体を動かすのが日課です。また、休日は妻と二人でカラオケによく行きます。"
    }
  ]
};

export const ContactData = {

  contact: {
    title: "Contact",
    items: [
      {
        label: "Email",
        value: "mekinobuyoshi@gmail.com",
        link: "mailto:mekinobuyoshi@gmail.com"
      },
      {
        label: "GitHub",
        value: "mekinobuyoshi-droid",
        link: "https://github.com/mekinobuyoshi-droid"
      }
    ]
  },


  siteStructure: {
    title: "このサイトの構成",
    description: "このポートフォリオは、あとで中身を増やすのが楽になるように「管理のしやすさ」を一番に考えて作っています。",
    points: [
      {
        subtitle: "Framework",
        detail: "Next.js"
      },
      {
        subtitle: "Worksページの動的生成",
        detail: "制作実績が増えても、リストに情報を追加するだけで自動的に新しい個別ページが作成される仕組みにしています。"
      },
      {
        subtitle: "全テキストの一元管理",
        detail: "サイト内の文章はすべて専用のデータファイルから呼び出しています。一箇所を直せば全体に反映される、ミスのない管理を意識しています。"
      },
    ]
  },
  image: {
    url: "/contact-img01.jpg",
    alt: "自宅",
  },
  update: "最終更新：2025年12月31日",
};

export const HeroSlides = [
  {
    id: 1,
    src: "/slide-img01.jpg",
    alt: "スライド画像1",
},
  {
    id: 2,
    src: "/slide-img02.jpg",
    alt: "スライド画像2",
},
  {
    id: 3,
    src: "/slide-img03.jpg",
    alt: "スライド画像3",
 },
];
