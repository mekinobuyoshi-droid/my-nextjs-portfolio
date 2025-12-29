export const SiteData = [
    {
        id: 1,
        title: "About",
        text: "テストテキスト。テストテキスト。テストテキスト。",
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
        text: "テストテキスト。テストテキスト。テストテキスト。",
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
                heading: "こだわりの実装：リマインド機能",
                content: "終了日時をタイムスタンプで管理し、現在時刻との差分をsetIntervalで常に計算。\n期限の数時間前になるとカードが黄色く点滅するロジックを実装しました。\nチェックボタン一つで解除できるUXにもこだわっています。"
            },
            {
                heading: "UI/UXの工夫",
                content: "作業の邪魔をしないよう、新規作成や編集はモーダルウィンドウで表示。\nタスクの『アクティブ・完了』もワンボタンで切り替えられるシンプルな設計にしました。"
            },
        ],
        img: "/work-img01.png",
        url: "https://react-taskmanager-app-2t6l.vercel.app/",
    },
    {
        id: 2,
        title: "未設定",
        text: "テストテキストテストテキストテストテキストテストテキストテストテキストテストテキストテストテキスト",
        explanation: [
            {
                heading: "見出し",
                content: "本文"
            },
            {
                heading: "見出し",
                content: "本文"
            },
            {
                heading: "見出し",
                content: "本文"
            },
        ],
        img: "/work-img02.png",
        url: "",
    },
   



];
