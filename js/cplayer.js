let player = new cplayer({
  element: document.getElementById('app'),
  playlist: [
    {
      src: 'https://raw.githubusercontent.com/mistydew/gc2/master/audio/%E9%9D%99%E5%AF%82%E3%81%AEconcerto.mp3',
      poster: 'https://raw.githubusercontent.com/mistydew/gc2/master/cover/album/Album_09th_%E3%83%A1%E3%83%A2%E3%83%AA%E3%83%BC%E3%82%BA.jpg',
      name: '静寂のconcerto',
      artist: 'GARNET CROW',
      lyric: '[00:00.00]静寂のconcerto\n[00:21.90]太陽が色彩(いろ)を連れて\n[00:26.50]この町を照らしはじめる\n[00:31.80]こんなに静かで深い朝がここにもある\n[00:42.70]バスが来る 待合人 共に暮らしがあるような\n[00:52.60]やさしい時間(とき) 流れる日々がこの地球(ほし)にある\n[01:03.40]追い越した景色の中にあるリズムは\n[01:12.70]いつからかそっと体中を支配してく forever\n[01:28.90]氷上を舞う水鳥達\n[01:34.30]アランフェスの調べ\n[01:39.30]踊る心の情熱が生きた証\n[02:11.30]空をゆく乾いた風この土地を離れることなく\n[02:21.30]生きた人々の想いに敵うものなどない\n[02:32.10]想像の中にある幸福への願いに\n[02:41.10]揺さぶられる きっと想うことのつながりに forever\n[02:57.60]六弦響く宵闇にはからみつくような鼓動\n[03:08.00]時にしなやかな生命打ち砕くように\n[03:18.50]祈り 踊る 命はまだかきたてる術がある\n[03:28.90]すべてに息づく躍動と静寂の concerto',
      sublyric: '[00:00.00]寂靜的協奏曲\n[00:04.00]歌手：GARNET CROW\n[00:08.00]作詞：AZUKI 七\n[00:11.00]作曲：中村由利\n[00:14.00]編曲：古井弘人\n[00:17.00]ギター：岡本仁志\n[00:21.90]太陽帶著色彩\n[00:26.50]開始照亮這個城市\n[00:31.80]這裡也有如此安靜又深沉的早晨\n[00:42.70]公車駛來 相約的人們 仿佛一起生活著\n[00:52.60]溫和的時光 流逝的日子就存在于這顆星球\n[01:03.40]超越在前的景色中的旋律\n[01:12.70]不知什麼時候開始悄悄地支配了全身 forever\n[01:28.90]冰上飛舞的水鳥們\n[01:34.30]阿蘭胡埃斯的曲調\n[01:39.30]躍動的心中的熱情是活過的證明\n[02:11.30]拂過上空的乾燥的風從未離開過這片土地\n[02:21.30]沒有什麼可以與曾經活著的人們的想法匹敵\n[02:32.10]祈願到達想像中的幸福\n[02:41.10]搖曳著 一定會達成心願 forever\n[02:57.60]六絃琴迴響的黃昏有著纏繞般的鼓動\n[03:08.00]時而仿佛要摧毀柔弱的生命\n[03:18.50]祈禱著 舞動著 有能力來書寫生命的樂章\n[03:28.90]存在於萬物之中的躍動和寂靜的 concerto',
      album: 'メモリーズ'
    },
    {
      src: 'https://raw.githubusercontent.com/mistydew/gc2/master/audio/Holy%20ground.mp3',
      poster: 'https://raw.githubusercontent.com/mistydew/gc2/master/cover/album/Album_02nd_SPARKLE_~%E7%AD%8B%E6%9B%B8%E3%81%8D%E9%80%9A%E3%82%8A%E3%81%AE%E3%82%B9%E3%82%AB%E3%82%A4%E3%83%96%E3%83%AB%E3%83%BC~.jpg',
      name: 'Holy ground',
      artist: 'GARNET CROW',
      lyric: '[00:00.00]Holy ground\n君のいない未来が\n[00:18.60]ただ大きな闇にみえ\n[00:21.60]死んでしまえば生きなくていい\n[00:26.70]そんな事ばかり考えてた\n[00:33.20]穏やかな月明かりに\n[00:39.60]体中を充たした こんな強い気持ちに\n[00:45.70]出会えたから もう何もいらない\n[00:50.30]欲しがる術 なくしても今\n[00:56.30]生き延びるの?\n[01:04.70]通り過ぎた幸福な時が\n[01:09.20]今をただ無意味に変える\n[01:16.80]病んだ躰が\n[01:18.80]昨日までの健康(しあわせ)を喜ぶなんてことしない\n[01:28.00]ただ焦がれるように求めてた\n[01:33.10]日々は するり 蜃気楼の向こうへ\n[01:38.70]今日が終われば今日へ\n[01:42.80]出遭うことない夢をみては\n[01:47.20]まだ過ごすなら\n[01:52.00]与え続けることでしか満たされない\n[01:59.20]聖地へ辿り着こう\n[02:04.60]行き場をなくした情熱は\n[02:10.60]冷えてゆくよ\n[02:24.80]不確かな気持ちを抱えながら\n[02:29.50]家路を辿りながら昇華してゆく\n[02:35.40]守るべきもの持たないなら\n[02:40.00]何を祈ろうか\n[02:49.60]世界が優しい光にいつか包まれますように…\n[03:01.80]なんて偽善者みたいな願い声にして\n[03:08.20]本当に変わればいい\n[03:13.00]深い傷よりも いつの日にか\n[03:18.40]愛しい気持ちが残るように\n[03:24.00]明日がくればまた明日へ\n[03:27.70]優しい方へ倒れ込んでゆけるように…\n[03:37.10]いつかその足で歩いてゆける時がきたら\n[03:44.40]聖地へ辿り着ける?\n[03:49.50]行き場をなくしたココロは\n[03:55.60]いつか目覚めて\n[03:58.50]揺れ動く波にのって\n[04:12.40]きっと生まれるよ',
      sublyric: '[00:00.00]聖地\n[00:04.00]歌手：GARNET CROW\n[00:07.00]作詞：AZUKI 七\n[00:09.00]作曲：中村由利\n[00:11.00]編曲：古井弘人\n[00:13.00]ギター：岡本仁志\n[00:15.30]沒有你的未來\n[00:18.60]衹能看到一片黑暗\n[00:21.60]如果能夠死掉而不是活著就好了\n[00:26.70]總是想著這樣的事情\n[00:33.20]在溫和的月光下\n[00:39.60]如此强烈的情感 充滿著全身\n[00:45.70]從遇見你開始 什麽也不再需要了\n[00:50.30]儘管現在沒有了欲望\n[00:56.30]還是可以活下去嗎？\n[01:04.70]逝去的幸福的時光\n[01:09.20]現在變得衹是毫無意義\n[01:16.80]如同患病的軀體\n[01:18.80]不會對昨天的健康而感到喜悅\n[01:28.00]衹是我渴望似的請求的\n[01:33.10]時光 順著 流向海市蜃樓的另一邊\n[01:38.70]今天結束的話又是今天\n[01:42.80]如果做的是沒有遇到你的夢\n[01:47.20]那麽還可以安穩度日吧\n[01:52.00]只有繼續給予才能被填補\n[01:59.20]一起到達神聖的地方\n[02:04.60]無處可去的熱情\n[02:10.60]是會變冷的哦\n[02:24.80]懷著不確定的心情\n[02:29.50]在歸路上漸漸昇華\n[02:35.40]如果沒有必須守護的東西\n[02:40.00]又祈禱什麼呢\n[02:49.60]願世界有一天會被溫柔的光所包圍...\n[03:01.80]說出所謂偽善者一樣的願望\n[03:08.20]如果變成真的就好了\n[03:13.00]比起很深的傷痕 在某一天會消失吧\n[03:18.40]像是殘留著愛的感覺\n[03:24.00]明天來臨的話還是明天\n[03:27.70]好像要倒進溫柔的地方...\n[03:37.10]倘若有朝一日那一刻來臨\n[03:44.40]能夠抵達神聖的地方嗎？\n[03:49.50]無處可去的內心\n[03:55.60]總有一天會醒來\n[03:58.50]隨著搖曳的波瀾\n[04:12.40]一定會重生的',
      album: 'SPARKLE ~筋書き通りのスカイブルー~'
    },
    {
      src: 'https://raw.githubusercontent.com/mistydew/gc2/master/audio/Over%20Drive.mp3',
      poster: 'https://raw.githubusercontent.com/mistydew/gc2/master/cover/album/Album_08th_parallel_universe.jpg',
      name: 'Over Drive',
      artist: 'GARNET CROW',
      lyric: '[00:00.00]Over Drive\n[00:24.00]風の音だけが\n[00:29.30]体中を包む\n[00:34.00]サイレント・Kiss\n[00:40.00]夢に似た気配\n[00:44.60]胸がキュッとなること\n[00:48.60]君といた季節\n[00:52.10]スカイハイ・Blue\n[00:55.80]遠ざかる\n[01:00.00]都合いい Happy End\n[01:03.80]さがしても癒せない\n[01:07.10]心が自由なら飛んでみせる\n[01:14.30]上空 舞うもの達と Over Drive\n[01:18.80]どこまでも青い世界にいたい\n[01:23.80]紙吹雪のように鳥が舞う\n[01:29.10]キレイね\n[01:31.20]追い風に乗るスリルも\n[01:35.30]まだ見ぬ行き先を想う\n[01:39.30]大切な期待に変えてゆける\n[01:44.30]raise up\n[02:00.40]波がキラめいたら\n[02:04.30]吸い込まれそうね\n[02:08.10]スターライト・Night\n[02:11.70]空高く\n[02:15.90]近づいた last scene\n[02:19.80]まだ今つかめない\n[02:22.80]不確かな未来さえ心地よく\n[02:30.30]上昇 恋は揺らいで Over Drive\n[02:35.10]目を見て無邪気に笑ってみせて\n[02:39.80]まるで風のようにすり抜ける\n[02:45.00]心ね\n[02:47.20]もっと近くにいたいと\n[02:51.40]願う空は 果てしなくて\n[02:55.20]本当の君に出会う日を\n[03:04.20]待ってる\n[03:18.20]上空 舞うもの達と Over Drive\n[03:22.90]どこまでも青い世界にいたい\n[03:27.90]紙吹雪のように鳥が舞う\n[03:32.90]キレイね\n[03:35.10]追い風に乗るスリルも\n[03:39.50]まだ見ぬ行き先を想う\n[03:43.30]大切な期待に変えてゆける\n[03:48.30]raise up\n[03:51.20]本当の君に出会う日を\n[03:56.20]待ってる',
      sublyric: '[00:00.00]凌空駕馭\n[00:04.00]歌手：GARNET CROW\n[00:08.00]作詞：AZUKI 七\n[00:11.00]作曲：中村由利\n[00:14.00]編曲：古井弘人\n[00:17.00]ギター：岡本仁志\n[00:24.00]衹有風的聲音\n[00:29.30]包裹著全身\n[00:34.00]Oh Silent Kiss Oh yeah\n[00:40.00]好像夢一樣的感覺\n[00:44.60]心中變得忐忑不安\n[00:48.60]和你在一起的季節\n[00:52.10]Sky High Blue Oh yeah\n[00:55.80]漸行漸遠\n[01:00.00]美好的結局\n[01:03.80]即便尋找的到也無法治愈\n[01:07.10]心若自由定會飛翔\n[01:14.30]與凌空飛舞的它們 Over Drive\n[01:18.80]不管到哪裏都想留在藍色的世界\n[01:23.80]鳥兒像雪花紙屑般飛舞\n[01:29.10]真美啊\n[01:31.20]乘上風尾的不安\n[01:35.30]想著尚未知曉的前路\n[01:39.30]化爲珍貴的期待\n[01:44.30]raise up\n[02:00.40]波光粼粼\n[02:04.30]仿佛要被吸入其中\n[02:08.10]Star light Night\n[02:11.70]晴空高遠\n[02:15.90]已經接近了 last scene\n[02:19.80]現在依然無法抓住\n[02:22.80]縱使不確定的未來也甘之如飴\n[02:30.30]上升 戀情搖擺不定 Over Drive\n[02:35.10]四目相對天真無邪的笑著\n[02:39.80]簡直就像風拂過心靈\n[02:45.00]心靈\n[02:47.20]想要離你更近些\n[02:51.40]向着無垠的天空祈禱著\n[02:55.20]我會等待與真正的你相遇的那一天\n[03:18.20]與凌空飛舞的它們 Over Drive\n[03:22.90]不管到哪裏都想留在藍色的世界\n[03:27.90]鳥兒像雪花紙屑般飛舞\n[03:32.90]真美啊\n[03:35.10]乘上風尾的不安\n[03:39.50]想著尚未知曉的前路\n[03:43.30]化爲珍貴的期待\n[03:48.30]raise up\n[03:51.20]我會等待與真正的你相遇的那一天',
      album: 'parallel universe'
    },
    {
      src: 'https://raw.githubusercontent.com/mistydew/gc2/master/audio/Hello%20Sadness.mp3',
      poster: 'https://raw.githubusercontent.com/mistydew/gc2/master/cover/album/Album_07th_STAY_~%E5%A4%9C%E6%98%8E%E3%81%91%E3%81%AESoul~.jpg',
      name: 'Hello Sadness',
      artist: 'GARNET CROW',
      lyric: '',
      sublyric: '',
      album: 'STAY ~夜明けのSoul~'
    },
    {
      src: 'https://raw.githubusercontent.com/mistydew/gc2/master/audio/%E5%A4%A2%E3%81%BF%E3%81%9F%E3%81%82%E3%81%A8%E3%81%A7.mp3',
      poster: 'https://raw.githubusercontent.com/mistydew/gc/master/images/cover/single/Single_10th_%E5%A4%A2%E3%81%BF%E3%81%9F%E3%81%82%E3%81%A8%E3%81%A7.jpg',
      name: '夢みたあとで',
      artist: 'GARNET CROW',
      lyric: '',
      sublyric: '',
      album: '夢みたあとで'
    },
    {
      src: 'https://raw.githubusercontent.com/mistydew/gc2/master/audio/As%20the%20Dew.mp3',
      poster: 'https://raw.githubusercontent.com/mistydew/gc2/master/cover/best/02nd_THE_BEST_History_of_GARNET_CROW_at_the_crest....jpg',
      name: 'As the Dew',
      artist: 'GARNET CROW',
      lyric: '',
      sublyric: '',
      album: 'THE BEST History of GARNET CROW at the crest...'
    },
    {
      src: 'https://raw.githubusercontent.com/mistydew/gc2/master/audio/As%20the%20Dew%20%E3%80%9Calbum%20version%E3%80%9C.mp3',
      poster: 'https://raw.githubusercontent.com/mistydew/gc2/master/cover/best/02nd_THE_BEST_History_of_GARNET_CROW_at_the_crest....jpg',
      name: 'As the Dew 〜album version〜',
      artist: 'GARNET CROW',
      lyric: '',
      sublyric: '',
      album: 'THE BEST History of GARNET CROW at the crest...'
    },
    {
      src: 'https://raw.githubusercontent.com/mistydew/gc2/master/audio/%E5%A4%8F%E3%81%AE%E5%B9%BB.mp3',
      poster: 'https://raw.githubusercontent.com/mistydew/gc/master/images/cover/single/Single_05th_%E5%A4%8F%E3%81%AE%E5%B9%BB_unofficial.jpg',
      name: '夏の幻',
      artist: 'GARNET CROW',
      lyric: '',
      sublyric: '',
      album: '夏の幻'
    },
    {
      src: 'https://raw.githubusercontent.com/mistydew/gc2/master/audio/%E5%A4%8F%E3%81%AE%E7%B5%82%E3%82%8F%E3%82%8A%E3%81%AE%E9%95%B7%E3%81%84%E9%9B%A8.mp3',
      poster: 'https://raw.githubusercontent.com/mistydew/gc/master/images/cover/single/Single_14th_%E5%90%9B%E3%81%A8%E3%81%84%E3%81%86%E5%85%89.jpg',
      name: '夏の終わりの長い雨',
      artist: 'GARNET CROW',
      lyric: '',
      sublyric: '',
      album: '君という光'
    },
    {
      src: 'https://raw.githubusercontent.com/mistydew/gc2/master/audio/call%20my%20name.mp3',
      poster: 'https://raw.githubusercontent.com/mistydew/gc/master/images/cover/single/Single_08th_call_my_name.jpg',
      name: 'call my name',
      artist: 'GARNET CROW',
      lyric: '',
      sublyric: '',
      album: 'call my name'
    },
    {
      src: 'https://raw.githubusercontent.com/mistydew/gc2/master/audio/Misty%20Mystery.mp3',
      poster: 'https://raw.githubusercontent.com/mistydew/gc2/master/cover/single/Single_33th_Misty_Mystery.jpg',
      name: 'Misty Mystery',
      artist: 'GARNET CROW',
      lyric: '',
      sublyric: '',
      album: 'Misty Mystery'
    },
    {
      src: 'https://raw.githubusercontent.com/mistydew/gc2/master/audio/Tell%20Me.mp3',
      poster: 'https://raw.githubusercontent.com/mistydew/gc/master/images/GIZA%20studio%20R%26B%20Respect%20Vol.1%20-%20six%20sisters%20selection.jpg',
      name: 'Tell Me',
      artist: '中村由利',
      lyric: '',
      sublyric: '',
      album: 'GIZA studio R&B Respect Vol.1 - six sisters selection'
    }
  ]
})
