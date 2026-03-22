(function () {
  const translations = {
    ja: {
      nav_features: '機能',
      nav_preview: 'プレビュー',
      nav_screenshots: 'スクリーンショット',
      nav_manual: 'マニュアル',
      nav_home: 'ホーム',
      nav_download: 'ダウンロード',
      screenshots_label: 'Screenshots',
      screenshots_title: 'アプリ画面',
      screenshots_desc: '実際のアプリケーション画面をご覧ください。',
      ss_tab_dashboard: 'ダッシュボード', ss_tab_universes: 'ユニバースビューア', ss_tab_flow: 'シグナルフロー',
      ss_tab_forwarding: 'フォワーディング', ss_tab_discovery: 'デバイス検出', ss_tab_dashboard2: 'ダッシュボード（50ユニバース）',
      ss_cap_dashboard: 'アクティブユニバース・デバイス・転送先・パケットレートをリアルタイム表示。',
      hero_subtitle:
        'Art-Net / sACN 信号の統合・可視化・記録・転送を一台に。ライブプロダクション現場のための DMX マネジメントツール。',
      badge_cross_platform: 'Cross-Platform',
      badge_minimal: 'Minimal & Powerful',
      hero_download_btn: 'Download v2.7.17',
      pillar1_label: 'Signal Management',
      pillar1_title: '信号の統合と伝送',
      pillar1_desc: 'Art-Net / sACN 信号を受信し、HTP・LTP・Priority でマージ。ユニバース単位のフィルタリング、オフセット再マッピング、遅延設定を経て、複数の宛先に同時転送。マルチ NIC 対応で、異なるサブネットの信号を一元管理。',
      pillar2_label: 'Record & Playback',
      pillar2_title: '信号の記録と再生',
      pillar2_desc: '受信中の DMX 信号をリアルタイムに記録。独自の ANMR フォーマットでデルタ圧縮し、長時間のキャプチャにも対応。記録した信号はプレイヤーモードでいつでも再生。リハーサルの記録、現場でのバックアップ出力、問題のデバッグに。',
      pillar3_label: 'Visualization',
      pillar3_title: '伝送のビジュアライズ',
      pillar3_desc: '512 チャンネルのグリッド表示、ソースからデスティネーションへの信号経路アニメーション、ダッシュボードでのリアルタイム統計。信号がどこからどこへ、どのように流れているかを一目で把握。',
      features_label: 'More Features',
      features_title: '現場で必要なもの、揃ってます',
      features_desc: '',
      feat_checker_title: 'テスト信号ツール',
      feat_checker_desc: '12 種のテストパターン（チェイス、ランダム、グラデーション等）を内蔵。ネットワーク上の機器動作確認やトラブルシューティングに、アプリ内から直接テスト信号を送出。',
      feat_discovery_title: 'ネットワークデバイス探索',
      feat_discovery_desc: 'サブネットスキャン + ARP + 逆引き DNS で、ネットワーク上の全デバイスを自動検出。Art-Net ノード、sACN ゲートウェイからネットワーク機器まで包括的に発見。',
      feat_guardian_title: 'ガーディアンシステム',
      feat_guardian_desc: '外部プロセスがアプリを常時監視し、クラッシュ・OOM・kill -9 を含むあらゆる異常終了から自動復旧。指数バックオフ付き。ライブ現場で止まらない。',
      feat_cluster_title: 'PRIMARY-STANDBY バックアップ',
      feat_cluster_desc: '複数インスタンスで冗長構成。自動リーダー選出とヘルスモニタリングで、ダウンタイムゼロのフェイルオーバーを実現。権限の移譲も簡単。ノード間の設定同期にも対応。',
      feat_dual_title: 'Art-Net & sACN デュアルプロトコル',
      feat_dual_desc: 'Art-Net 4 と sACN (E1.31) の両方に対応。プロトコル間の変換・ブリッジも自動で処理。マルチ NIC で異なるサブネットからの信号を同時受信。',
      feat_config_title: '設定のエクスポート & インポート',
      feat_config_desc: 'フォワーディング設定をファイルに保存・読み込み。複数現場での設定使い回しや、バックアップに対応。',
      feat1_title: 'リアルタイム DMX 可視化',
      feat1_desc:
        '512チャンネルをグリッドでリアルタイム表示。色分けされたインテンシティで、信号の変化を瞬時に把握。マルチユニバース同時表示にも対応。',
      feat2_title: 'Art-Net & sACN デュアルプロトコル',
      feat2_desc:
        'Art-Net 4 と sACN (E1.31) の両方に対応。プロトコル間の変換・ブリッジも自動で処理。',
      feat3_title: 'ユニバースマージエンジン',
      feat3_desc:
        '複数ソースの DMX 信号を HTP（最大値優先）/ LTP（最新値優先）/ Priority で自動マージ。DMXking/ENTTEC eDMX と同等のマルチソース処理。',
      feat4_title: 'マルチネットワークインターフェース',
      feat4_desc:
        '複数の NIC に同時バインド。異なるサブネットからの Art-Net/sACN 信号を一元受信・マージ。アプリ再起動なしでのホットスイッチに対応。',
      feat5_title: 'ネットワークデバイス探索',
      feat5_desc:
        'サブネットスキャン + ARP + 逆引きDNS で、ネットワーク上の全デバイスを自動検出。照明機器に限らず包括的に発見。',
      feat6_title: 'シグナルフロー可視化',
      feat6_desc:
        'ソースからユニバースを経由してデスティネーションへの信号経路をアニメーション付きで表示。流れるパーティクルで通信状態を直感的に確認。',
      feat7_title: 'フォワーディング & ルーティング',
      feat7_desc:
        '宛先ごとにユニバースフィルタリング、オフセット再マッピング、遅延設定（0〜10秒）を柔軟に構成。設定のインポート/エクスポートにも対応。',
      feat8_title: 'ガーディアンシステム',
      feat8_desc:
        '外部プロセスがアプリを常時監視し、クラッシュ・セグフォルト・OOM・kill -9 を含むあらゆる異常終了から自動復旧。指数バックオフ付き。ライブ現場で止まらない。',
      feat9_title: 'PRIMARY-STANDBY バックアップ',
      feat9_desc:
        '複数の ArtNet Manager インスタンスで PRIMARY-STANDBY 冗長構成。自動リーダー選出とヘルスモニタリングで、ダウンタイムゼロのフェイルオーバーを実現。',
      preview_label: 'App Preview',
      preview_title: 'インターフェース',
      preview_desc:
        '必要な情報だけを、最短で。ダークテーマの洗練されたUIで現場に集中。',
      preview_universe:
        '512チャンネルのDMX値をリアルタイムにグリッド表示。青→シアン→白のグラデーションでインテンシティを可視化。',
      preview_signal:
        'ソース→ユニバース→デスティネーションの信号経路をアニメーション付きで可視化。流れるパーティクルでライブ通信を表現。',
      preview_delay:
        'デスティネーションごとに遅延設定（0〜10秒）。タイミング調整が必要な現場での映像同期やバックアップ系統の遅延出力に。',
      preview_device:
        'ネットワーク上のすべてのデバイスを自動検出。Art-Net ノード、sACN ゲートウェイ、コンピュータ、ネットワーク機器をカテゴリ分けして一覧表示。リアルタイムでオンライン/オフライン状態を監視。',
      download_label: 'Download',
      download_title: 'ダウンロード',
      download_desc:
        'v2.7.17 — 信号記録・再生、テスト信号ツール、ガーディアン、クラスター冗長を搭載。',
      dl_win: 'Windows',
      dl_win_version: 'v2.7.17 · Installer (.exe)',
      dl_win_portable: 'Windows Portable',
      dl_win_portable_version: 'v2.7.17 · Portable (.exe)',
      dl_mac: 'macOS (Apple Silicon)',
      dl_mac_version: 'v2.7.17 · DMG (.dmg)',
      mac_adp_notice: 'このアプリはADP申請中です。認可されるまでの間はコマンドラインでの許可が必要です。',
      mac_adp_link: '詳しくはマニュアルへ →',
      dl_btn: 'Download',
      disclaimer_p1:
        'ArtNet Manager は <a href="https://moov-stud.io" target="_blank" rel="noopener">MOOV by Composition Inc.</a> のもと、<a href="https://github.com/llcheesell" target="_blank" rel="noopener">llcheesell</a> がリリースしたアプリケーションです。プロダクションレディなソフトウェアを目指して開発を進めていますが、現在はテスト段階であり、動作の完全な検証は完了していません。本ソフトウェアの使用に起因するいかなる損害・事故についても、開発者は一切の責任を負いかねます。',
      disclaimer_p2:
        '現場に根差した、信頼性の高いツールを目指しています。ぜひ実際にお試しいただき、バグ報告やご意見をお寄せください。皆さまのフィードバックが、このアプリをより良くします。',
      teaser_label: 'Coming Soon',
      teaser_title: 'Next Update',
      teaser_desc: '次のバージョンで、さらに深く。',
      teaser_feat1_title: '信号ルーティングの精度向上',
      teaser_feat1_desc: '高精度タイマー、GCフリー受信パス、1msタイマー精度。ジッターを排除し、フレーム単位の正確なルーティングを。',
      teaser_feat2_title: '信号の記録・再生機能',
      teaser_feat2_desc: 'DMX信号をキャプチャし、いつでも正確に再生。リハーサル、デバッグ、本番のバックアップに。',
      feedback_label: 'Feedback',
      feedback_title: 'フィードバックをお寄せください',
      feedback_desc: 'バグ報告や機能リクエストはこちらから。開発の参考にさせていただきます。',
      feedback_btn: 'バグ報告・機能リクエスト',
      feedback_note: '現場に根差した、信頼性の高いツールを目指しています。皆さまのフィードバックが、このアプリをより良くします。',
      tech_label: 'Built With',
      tech_title: '技術スタック',
      tech_desc:
        'モダンな技術で構築された、プロダクションレディなアプリケーション。',
      footer_copy: '\u00a9 2026 MOOV by Composition Inc.',
    },

    en: {
      nav_features: 'Features',
      nav_preview: 'Preview',
      nav_screenshots: 'Screenshots',
      nav_manual: 'Manual',
      nav_home: 'Home',
      nav_download: 'Download',
      screenshots_label: 'Screenshots',
      screenshots_title: 'App Screenshots',
      screenshots_desc: 'See the application in action.',
      ss_tab_dashboard: 'Dashboard', ss_tab_universes: 'Universe Viewer', ss_tab_flow: 'Signal Flow',
      ss_tab_forwarding: 'Forwarding', ss_tab_discovery: 'Device Discovery', ss_tab_dashboard2: 'Dashboard (50 Universes)',
      ss_cap_dashboard: 'Real-time overview of active universes, discovered devices, destinations, and packet rate.',
      hero_subtitle:
        'Unified management, visualization, recording, and forwarding of Art-Net / sACN signals. A DMX management tool built for live production.',
      badge_cross_platform: 'Cross-Platform',
      badge_minimal: 'Minimal & Powerful',
      hero_download_btn: 'Download v2.7.17',
      pillar1_label: 'Signal Management',
      pillar1_title: 'Signal Integration & Transmission',
      pillar1_desc: 'Receive Art-Net / sACN signals and merge with HTP, LTP, or Priority. Filter by universe, remap offsets, configure delays, and forward to multiple destinations simultaneously. Multi-NIC support for unified management across subnets.',
      pillar2_label: 'Record & Playback',
      pillar2_title: 'Signal Recording & Playback',
      pillar2_desc: 'Record incoming DMX signals in real time. Delta-compressed ANMR format keeps file sizes manageable for long captures. Play back recordings anytime in Player mode\u2014for rehearsal capture, on-site backup output, or debugging.',
      pillar3_label: 'Visualization',
      pillar3_title: 'Signal Flow Visualization',
      pillar3_desc: '512-channel grid display, animated signal path diagrams from sources through universes to destinations, and real-time dashboard statistics. See where your signals flow at a glance.',
      features_label: 'More Features',
      features_title: 'Everything you need on site',
      features_desc: '',
      feat_checker_title: 'Test Signal Tool',
      feat_checker_desc: '12 built-in test patterns (chase, random, gradient, etc.). Send test signals directly from the app for device verification and troubleshooting.',
      feat_discovery_title: 'Network Device Discovery',
      feat_discovery_desc: 'Subnet scan + ARP + reverse DNS automatically discovers all devices on your network. From Art-Net nodes and sACN gateways to network infrastructure.',
      feat_guardian_title: 'Guardian System',
      feat_guardian_desc: 'An external process monitors the app at all times, automatically recovering from crashes, OOM, and kill -9. Exponential backoff included. Never stops during a live show.',
      feat_cluster_title: 'PRIMARY-STANDBY Backup',
      feat_cluster_desc: 'Redundant multi-instance setup. Automatic leader election and health monitoring for zero-downtime failover. Easy authority transfer between nodes. Config sync across cluster members.',
      feat_dual_title: 'Art-Net & sACN Dual Protocol',
      feat_dual_desc: 'Full support for Art-Net 4 and sACN (E1.31). Automatic protocol conversion and bridging. Multi-NIC for simultaneous reception from different subnets.',
      feat_config_title: 'Config Export & Import',
      feat_config_desc: 'Save and load forwarding configurations to files. Reuse settings across venues and keep backups.',
      feat1_title: 'Real-time DMX Visualization',
      feat1_desc:
        'View all 512 channels in a real-time grid. Color-coded intensity lets you instantly spot signal changes. Multi-universe simultaneous display supported.',
      feat2_title: 'Art-Net & sACN Dual Protocol',
      feat2_desc:
        'Full support for both Art-Net 4 and sACN (E1.31). Automatic protocol conversion and bridging handled seamlessly.',
      feat3_title: 'Universe Merge Engine',
      feat3_desc:
        'Automatically merge DMX signals from multiple sources using HTP (Highest Takes Precedence), LTP (Latest Takes Precedence), or Priority. Multi-source processing on par with DMXking/ENTTEC eDMX.',
      feat4_title: 'Multi-Network Interface',
      feat4_desc:
        'Bind to multiple NICs simultaneously. Receive and merge Art-Net/sACN signals from different subnets in one place. Hot-switch without restarting the app.',
      feat5_title: 'Network Device Discovery',
      feat5_desc:
        'Subnet scan + ARP + reverse DNS to automatically discover every device on your network. Comprehensive detection beyond just lighting fixtures.',
      feat6_title: 'Signal Flow Visualization',
      feat6_desc:
        'Animated view of signal paths from sources through universes to destinations. Flowing particles give you an intuitive read on live communication status.',
      feat7_title: 'Forwarding & Routing',
      feat7_desc:
        'Configure universe filtering, offset remapping, and delay (0\u201310 seconds) per destination. Import/export configurations supported.',
      feat8_title: 'Guardian System',
      feat8_desc:
        'An external process continuously monitors the app, providing automatic recovery from any abnormal termination\u2014including crashes, segfaults, OOM, and kill -9. Exponential backoff included. Your show never stops.',
      feat9_title: 'PRIMARY-STANDBY Backup',
      feat9_desc:
        'Run multiple ArtNet Manager instances in a PRIMARY-STANDBY redundancy configuration. Automatic leader election and health monitoring deliver zero-downtime failover.',
      preview_label: 'App Preview',
      preview_title: 'Interface',
      preview_desc:
        'Only what you need, as fast as possible. A refined dark-themed UI so you can stay focused on the job.',
      preview_universe:
        'Real-time grid display of 512 DMX channel values. Blue\u2192cyan\u2192white gradient for intuitive intensity visualization.',
      preview_signal:
        'Animated visualization of signal paths from source to universe to destination. Flowing particles represent live communication.',
      preview_delay:
        'Per-destination delay settings (0\u201310 seconds). Ideal for video sync and backup system delayed output where precise timing is required.',
      preview_device:
        'Automatic discovery of all devices on your network. Art-Net nodes, sACN gateways, computers, and network equipment are categorized and listed. Real-time online/offline status monitoring.',
      download_label: 'Download',
      download_title: 'Download',
      download_desc:
        'v2.7.17 \u2014 Signal recording/playback, test signal tool, Guardian, and cluster redundancy.',
      dl_win: 'Windows',
      dl_win_version: 'v2.7.17 \u00b7 Installer (.exe)',
      dl_win_portable: 'Windows Portable',
      dl_win_portable_version: 'v2.7.17 \u00b7 Portable (.exe)',
      dl_mac: 'macOS (Apple Silicon)',
      dl_mac_version: 'v2.7.17 \u00b7 DMG (.dmg)',
      mac_adp_notice: 'This app is pending Apple Developer Program approval. Until then, command-line permission is required to open it.',
      mac_adp_link: 'See the manual for details →',
      dl_btn: 'Download',
      disclaimer_p1:
        'ArtNet Manager is an application released by <a href="https://github.com/llcheesell" target="_blank" rel="noopener">llcheesell</a> under <a href="https://moov-stud.io" target="_blank" rel="noopener">MOOV by Composition Inc.</a> While we are working toward production-ready software, it is currently in a testing phase and has not been fully verified. The developer assumes no liability for any damages or incidents resulting from the use of this software.',
      disclaimer_p2:
        'We are building a reliable tool rooted in real-world production needs. Please try it out and share your bug reports and feedback. Your input makes this app better.',
      teaser_label: 'Coming Soon',
      teaser_title: 'Next Update',
      teaser_desc: 'Going deeper in the next version.',
      teaser_feat1_title: 'Signal Routing Precision',
      teaser_feat1_desc: 'High-precision timers, GC-free receive path, 1ms timer resolution. Jitter eliminated for frame-accurate routing.',
      teaser_feat2_title: 'Signal Recording & Playback',
      teaser_feat2_desc: 'Capture DMX signals and replay them with precision. For rehearsals, debugging, and live show backup.',
      feedback_label: 'Feedback',
      feedback_title: 'Share Your Feedback',
      feedback_desc: 'Report bugs or request features. Your input shapes development.',
      feedback_btn: 'Bug Report / Feature Request',
      feedback_note: 'Building a reliable tool rooted in real-world production needs. Your feedback makes this app better.',
      tech_label: 'Built With',
      tech_title: 'Tech Stack',
      tech_desc: 'A production-ready application built with modern technologies.',
      footer_copy: '\u00a9 2026 MOOV by Composition Inc.',
    },

    de: {
      nav_features: 'Funktionen',
      nav_preview: 'Vorschau',
      nav_screenshots: 'Screenshots',
      nav_manual: 'Handbuch',
      nav_home: 'Startseite',
      nav_download: 'Download',
      screenshots_label: 'Screenshots',
      screenshots_title: 'App-Screenshots',
      screenshots_desc: 'Sehen Sie die Anwendung in Aktion.',
      ss_tab_dashboard: 'Dashboard', ss_tab_universes: 'Universe Viewer', ss_tab_flow: 'Signalfluss',
      ss_tab_forwarding: 'Weiterleitung', ss_tab_discovery: 'Geräteerkennung', ss_tab_dashboard2: 'Dashboard (50 Universen)',
      ss_cap_dashboard: 'Echtzeit-Übersicht aktiver Universen, erkannter Geräte, Ziele und Paketrate.',
      hero_subtitle:
        'Verwaltung, Visualisierung und Forwarding von Art-Net / sACN Signalen \u2013 alles in einem Tool. Minimalistisch und dennoch leistungsstark \u2013 das DMX-Werkzeug f\u00fcr die Live-Produktion.',
      badge_cross_platform: 'Cross-Platform',
      badge_minimal: 'Minimal & Powerful',
      hero_download_btn: 'Download v2.7.17',
      pillar1_label: 'Signal Management',
      pillar1_title: 'Signalintegration & Übertragung',
      pillar1_desc: 'Art-Net / sACN Signale empfangen und mit HTP, LTP oder Priority zusammenführen. Universe-Filterung, Offset-Remapping, Verzögerung und gleichzeitige Weiterleitung an mehrere Ziele. Multi-NIC für einheitliche Verwaltung über Subnetze hinweg.',
      pillar2_label: 'Record & Playback',
      pillar2_title: 'Signalaufnahme & Wiedergabe',
      pillar2_desc: 'DMX-Signale in Echtzeit aufzeichnen. Delta-komprimiertes ANMR-Format für kompakte Langzeitaufnahmen. Im Player-Modus jederzeit abspielen — für Proben, Backup-Ausgabe oder Debugging.',
      pillar3_label: 'Visualization',
      pillar3_title: 'Signalfluss-Visualisierung',
      pillar3_desc: '512-Kanal-Rasteranzeige, animierte Signalpfad-Diagramme von Quellen über Universen zu Zielen und Echtzeit-Dashboard-Statistiken. Signalflüsse auf einen Blick erfassen.',
      feat_checker_title: 'Testsignal-Tool',
      feat_checker_desc: '12 integrierte Testmuster (Chase, Random, Gradient usw.). Testsignale direkt aus der App senden zur Geräteverifikation und Fehlersuche.',
      feat_discovery_title: 'Netzwerk-Geräteerkennung',
      feat_discovery_desc: 'Subnetz-Scan + ARP + Reverse-DNS erkennt automatisch alle Netzwerkgeräte. Von Art-Net-Nodes und sACN-Gateways bis zur Netzwerkinfrastruktur.',
      feat_guardian_title: 'Guardian-System',
      feat_guardian_desc: 'Ein externer Prozess überwacht die App permanent und stellt sie bei Abstürzen, OOM und kill -9 automatisch wieder her. Exponentielles Backoff inklusive. Stoppt nie während einer Live-Show.',
      feat_cluster_title: 'PRIMARY-STANDBY Backup',
      feat_cluster_desc: 'Redundante Multi-Instanz-Konfiguration. Automatische Leader-Election und Health-Monitoring für ausfallfreies Failover. Einfache Autoritätsübertragung zwischen Nodes. Konfigurationssynchronisation zwischen Cluster-Mitgliedern.',
      feat_dual_title: 'Art-Net & sACN Dual-Protokoll',
      feat_dual_desc: 'Volle Unterstützung für Art-Net 4 und sACN (E1.31). Automatische Protokollkonvertierung und Bridging. Multi-NIC für gleichzeitigen Empfang aus verschiedenen Subnetzen.',
      feat_config_title: 'Konfigurations-Export & -Import',
      feat_config_desc: 'Forwarding-Konfigurationen als Dateien speichern und laden. Einstellungen über Veranstaltungsorte hinweg wiederverwenden und Backups erstellen.',
      features_label: 'Features',
      features_title: 'Alles, was Sie vor Ort brauchen',
      features_desc:
        'Kein \u00dcberfluss. Empfangen, Mergen, \u00dcberwachen, Konvertieren und Weiterleiten von DMX-Signalen \u2013 in einer \u00fcbersichtlichen Oberfl\u00e4che.',
      feat1_title: 'Echtzeit-DMX-Visualisierung',
      feat1_desc:
        'Alle 512 Kan\u00e4le als Echtzeit-Raster dargestellt. Farbkodierte Intensit\u00e4tswerte erm\u00f6glichen es, Signal\u00e4nderungen sofort zu erkennen. Multi-Universe-Anzeige wird unterst\u00fctzt.',
      feat2_title: 'Art-Net & sACN Dual-Protokoll',
      feat2_desc:
        'Volle Unterst\u00fctzung f\u00fcr Art-Net 4 und sACN (E1.31). Automatische Protokollkonvertierung und Bridging \u2013 nahtlos integriert.',
      feat3_title: 'Universe-Merge-Engine',
      feat3_desc:
        'Automatisches Mergen von DMX-Signalen aus mehreren Quellen mit HTP (Highest Takes Precedence), LTP (Latest Takes Precedence) oder Priority. Multi-Source-Verarbeitung auf dem Niveau von DMXking/ENTTEC eDMX.',
      feat4_title: 'Multi-Netzwerkschnittstelle',
      feat4_desc:
        'Gleichzeitiges Binden an mehrere NICs. Art-Net/sACN-Signale aus verschiedenen Subnetzen zentral empfangen und mergen. Hot-Switch ohne Neustart der Anwendung.',
      feat5_title: 'Netzwerk-Ger\u00e4teerkennung',
      feat5_desc:
        'Subnetz-Scan + ARP + Reverse-DNS zur automatischen Erkennung aller Ger\u00e4te im Netzwerk. Umfassende Erkennung \u2013 nicht nur Scheinwerfer.',
      feat6_title: 'Signalfluss-Visualisierung',
      feat6_desc:
        'Animierte Darstellung der Signalwege von Quellen \u00fcber Universen zu Zielen. Flie\u00dfende Partikel geben intuitiven Einblick in den Live-Kommunikationsstatus.',
      feat7_title: 'Forwarding & Routing',
      feat7_desc:
        'Universe-Filterung, Offset-Remapping und Verz\u00f6gerung (0\u201310 Sekunden) pro Ziel konfigurierbar. Import/Export von Konfigurationen wird unterst\u00fctzt.',
      feat8_title: 'Guardian-System',
      feat8_desc:
        'Ein externer Prozess \u00fcberwacht die Anwendung kontinuierlich und stellt sie bei jedem abnormalen Beenden automatisch wieder her \u2013 einschlie\u00dflich Abst\u00fcrze, Segfaults, OOM und kill -9. Mit exponentiellem Backoff. Ihre Show l\u00e4uft immer weiter.',
      feat9_title: 'PRIMARY-STANDBY Backup',
      feat9_desc:
        'Mehrere ArtNet Manager-Instanzen in einer PRIMARY-STANDBY-Redundanzkonfiguration. Automatische Leader-Election und Health-Monitoring f\u00fcr ein Failover ohne Ausfallzeit.',
      preview_label: 'App Preview',
      preview_title: 'Benutzeroberfläche',
      preview_desc:
        'Nur das, was Sie brauchen \u2013 so schnell wie m\u00f6glich. Eine elegante Dark-Theme-Oberfl\u00e4che f\u00fcr volle Konzentration auf die Arbeit.',
      preview_universe:
        'Echtzeit-Rasteranzeige aller 512 DMX-Kanalwerte. Blau\u2192Cyan\u2192Wei\u00df-Verlauf f\u00fcr intuitive Intensit\u00e4tsvisualisierung.',
      preview_signal:
        'Animierte Visualisierung der Signalwege von Quelle \u00fcber Universe zum Ziel. Flie\u00dfende Partikel repr\u00e4sentieren die Live-Kommunikation.',
      preview_delay:
        'Verz\u00f6gerungseinstellung pro Ziel (0\u201310 Sekunden). Ideal f\u00fcr Videosynchronisation und verz\u00f6gerte Ausgabe bei Backup-Systemen.',
      preview_device:
        'Automatische Erkennung aller Ger\u00e4te im Netzwerk. Art-Net-Nodes, sACN-Gateways, Computer und Netzwerkger\u00e4te werden kategorisiert aufgelistet. Echtzeit-\u00dcberwachung des Online-/Offline-Status.',
      download_label: 'Download',
      download_title: 'Download',
      download_desc:
        'v2.7.17 \u2014 Signalaufnahme/-wiedergabe, Testsignal-Tool, Guardian und Cluster-Redundanz.',
      dl_win: 'Windows',
      dl_win_version: 'v2.7.17 \u00b7 Installer (.exe)',
      dl_win_portable: 'Windows Portable',
      dl_win_portable_version: 'v2.7.17 \u00b7 Portable (.exe)',
      dl_mac: 'macOS (Apple Silicon)',
      dl_mac_version: 'v2.7.17 \u00b7 DMG (.dmg)',
      mac_adp_notice: 'Diese App wartet auf die Genehmigung des Apple Developer Program. Bis dahin ist eine Befehlszeilen-Freigabe erforderlich.',
      mac_adp_link: 'Details im Handbuch →',
      dl_btn: 'Download',
      disclaimer_p1:
        'ArtNet Manager ist eine Anwendung, die von <a href="https://github.com/llcheesell" target="_blank" rel="noopener">llcheesell</a> unter <a href="https://moov-stud.io" target="_blank" rel="noopener">MOOV by Composition Inc.</a> ver\u00f6ffentlicht wurde. Wir arbeiten auf eine produktionsreife Software hin, sie befindet sich jedoch derzeit in der Testphase und wurde noch nicht vollst\u00e4ndig verifiziert. Der Entwickler \u00fcbernimmt keine Haftung f\u00fcr Sch\u00e4den oder Vorf\u00e4lle, die aus der Nutzung dieser Software resultieren.',
      disclaimer_p2:
        'Wir entwickeln ein zuverl\u00e4ssiges Werkzeug, das auf realen Produktionsanforderungen basiert. Probieren Sie es aus und teilen Sie uns Ihre Fehlerberichte und Ihr Feedback mit. Ihr Input macht diese App besser.',
      teaser_label: 'Coming Soon',
      teaser_title: 'Next Update',
      teaser_desc: 'In der n\u00e4chsten Version noch tiefer.',
      teaser_feat1_title: 'Signal-Routing-Pr\u00e4zision',
      teaser_feat1_desc: 'Hochpr\u00e4zise Timer, GC-freier Empfangspfad, 1ms Timer-Aufl\u00f6sung. Jitter eliminiert f\u00fcr framegenaus Routing.',
      teaser_feat2_title: 'Signalaufnahme & -wiedergabe',
      teaser_feat2_desc: 'DMX-Signale aufzeichnen und jederzeit pr\u00e4zise wiedergeben. F\u00fcr Proben, Debugging und Live-Show-Backup.',
      feedback_label: 'Feedback',
      feedback_title: 'Teilen Sie Ihr Feedback',
      feedback_desc: 'Fehler melden oder Funktionen wünschen. Ihr Input prägt die Entwicklung.',
      feedback_btn: 'Fehlerbericht / Funktionswunsch',
      feedback_note: 'Wir entwickeln ein zuverlässiges Werkzeug für reale Produktionsanforderungen. Ihr Feedback macht diese App besser.',
      tech_label: 'Built With',
      tech_title: 'Technologie-Stack',
      tech_desc:
        'Eine produktionsreife Anwendung, entwickelt mit modernen Technologien.',
      footer_copy: '\u00a9 2026 MOOV by Composition Inc.',
    },

    fr: {
      nav_features: 'Fonctionnalit\u00e9s',
      nav_preview: 'Aper\u00e7u',
      nav_screenshots: 'Captures',
      nav_manual: 'Manuel',
      nav_home: 'Accueil',
      nav_download: 'T\u00e9l\u00e9charger',
      screenshots_label: 'Screenshots', screenshots_title: "Captures d'\u00e9cran", screenshots_desc: "D\u00e9couvrez l'application en action.",
      ss_tab_dashboard: 'Tableau de bord', ss_tab_universes: "Visualiseur d'univers", ss_tab_flow: 'Flux de signal',
      ss_tab_forwarding: 'Transfert', ss_tab_discovery: 'D\u00e9couverte', ss_tab_dashboard2: 'Tableau de bord (50 univers)',
      ss_cap_dashboard: 'Aper\u00e7u en temps r\u00e9el des univers actifs, appareils d\u00e9couverts, destinations et d\u00e9bit.',
      hero_subtitle:
        'Gestion, visualisation et forwarding unifi\u00e9s des signaux Art-Net / sACN. Un outil DMX minimal mais puissant, con\u00e7u pour la production live.',
      badge_cross_platform: 'Cross-Platform',
      badge_minimal: 'Minimal & Powerful',
      hero_download_btn: 'Download v2.7.17',
      pillar1_label: 'Signal Management',
      pillar1_title: 'Intégration & transmission du signal',
      pillar1_desc: 'Recevoir les signaux Art-Net / sACN et fusionner en HTP, LTP ou Priority. Filtrage par univers, remapping d\'offset, délai et transmission simultanée vers plusieurs destinations. Multi-NIC pour une gestion unifiée entre sous-réseaux.',
      pillar2_label: 'Record & Playback',
      pillar2_title: 'Enregistrement & lecture du signal',
      pillar2_desc: 'Enregistrer les signaux DMX en temps réel. Format ANMR à compression delta pour des captures longues et compactes. Rejouer à tout moment en mode Player — pour les répétitions, la sortie de secours ou le débogage.',
      pillar3_label: 'Visualization',
      pillar3_title: 'Visualisation du flux de signal',
      pillar3_desc: 'Affichage en grille 512 canaux, diagrammes animés des chemins de signal des sources aux destinations via les univers, et statistiques en temps réel. Visualisez les flux de signal d\'un coup d\'œil.',
      feat_checker_title: 'Outil de signal test',
      feat_checker_desc: '12 motifs de test intégrés (chase, aléatoire, gradient, etc.). Envoyez des signaux de test directement depuis l\'app pour la vérification des appareils.',
      feat_discovery_title: 'Découverte réseau',
      feat_discovery_desc: 'Scan de sous-réseau + ARP + DNS inversé pour découvrir automatiquement tous les appareils. Des nœuds Art-Net aux passerelles sACN et à l\'infrastructure réseau.',
      feat_guardian_title: 'Système Guardian',
      feat_guardian_desc: 'Un processus externe surveille l\'app en permanence, récupérant automatiquement des crashs, OOM et kill -9. Backoff exponentiel inclus. Ne s\'arrête jamais pendant un spectacle.',
      feat_cluster_title: 'Backup PRIMARY-STANDBY',
      feat_cluster_desc: 'Configuration multi-instance redondante. Élection automatique du leader et surveillance de santé pour un basculement sans interruption. Transfert d\'autorité simplifié. Synchronisation des configurations entre membres du cluster.',
      feat_dual_title: 'Double protocole Art-Net & sACN',
      feat_dual_desc: 'Support complet d\'Art-Net 4 et sACN (E1.31). Conversion et pont automatiques entre protocoles. Multi-NIC pour la réception simultanée depuis différents sous-réseaux.',
      feat_config_title: 'Export & import de configuration',
      feat_config_desc: 'Sauvegarder et charger les configurations de forwarding. Réutiliser les paramètres entre lieux et créer des sauvegardes.',
      features_label: 'Features',
      features_title: 'Tout ce qu\u0027il vous faut sur site',
      features_desc:
        'Pas de superflu. R\u00e9ception, fusion, surveillance, conversion et transfert de signaux DMX \u2014 dans une interface \u00e9pur\u00e9e.',
      feat1_title: 'Visualisation DMX en temps r\u00e9el',
      feat1_desc:
        'Affichez les 512 canaux en temps r\u00e9el sous forme de grille. L\u2019intensit\u00e9 color\u00e9e permet de rep\u00e9rer instantan\u00e9ment les changements de signal. Affichage multi-univers simultan\u00e9 pris en charge.',
      feat2_title: 'Art-Net & sACN Double Protocole',
      feat2_desc:
        'Prise en charge compl\u00e8te d\u2019Art-Net 4 et sACN (E1.31). Conversion et pontage automatiques entre protocoles.',
      feat3_title: 'Moteur de fusion d\u2019univers',
      feat3_desc:
        'Fusion automatique des signaux DMX de sources multiples en HTP (priorit\u00e9 \u00e0 la valeur la plus haute), LTP (priorit\u00e9 \u00e0 la derni\u00e8re valeur) ou par priorit\u00e9. Traitement multi-sources comparable \u00e0 DMXking/ENTTEC eDMX.',
      feat4_title: 'Interface multi-r\u00e9seau',
      feat4_desc:
        'Bindez simultan\u00e9ment sur plusieurs NICs. Recevez et fusionnez les signaux Art-Net/sACN de diff\u00e9rents sous-r\u00e9seaux. Basculement \u00e0 chaud sans red\u00e9marrage.',
      feat5_title: 'D\u00e9couverte des p\u00e9riph\u00e9riques r\u00e9seau',
      feat5_desc:
        'Scan de sous-r\u00e9seau + ARP + DNS inverse pour d\u00e9couvrir automatiquement tous les appareils du r\u00e9seau. D\u00e9tection compl\u00e8te au-del\u00e0 des seuls projecteurs.',
      feat6_title: 'Visualisation du flux de signal',
      feat6_desc:
        'Vue anim\u00e9e des chemins de signal, des sources aux destinations en passant par les univers. Des particules en mouvement offrent une lecture intuitive de l\u2019\u00e9tat de communication.',
      feat7_title: 'Forwarding & Routage',
      feat7_desc:
        'Filtrage d\u2019univers, remapping d\u2019offset et d\u00e9lai (0\u201310 secondes) configurables par destination. Import/export de configurations pris en charge.',
      feat8_title: 'Syst\u00e8me Guardian',
      feat8_desc:
        'Un processus externe surveille en permanence l\u2019application et assure une r\u00e9cup\u00e9ration automatique apr\u00e8s toute terminaison anormale \u2014 crashs, segfaults, OOM, kill -9 inclus. Avec backoff exponentiel. Votre spectacle ne s\u2019arr\u00eate jamais.',
      feat9_title: 'Sauvegarde PRIMARY-STANDBY',
      feat9_desc:
        'Ex\u00e9cutez plusieurs instances ArtNet Manager en configuration de redondance PRIMARY-STANDBY. \u00c9lection automatique du leader et surveillance de sant\u00e9 pour un basculement sans temps d\u2019arr\u00eat.',
      preview_label: 'App Preview',
      preview_title: 'Interface',
      preview_desc:
        'Uniquement l\u2019essentiel, le plus rapidement possible. Une interface sombre et raffin\u00e9e pour rester concentr\u00e9 sur le travail.',
      preview_universe:
        'Affichage en grille temps r\u00e9el des 512 valeurs DMX. D\u00e9grad\u00e9 bleu\u2192cyan\u2192blanc pour une visualisation intuitive de l\u2019intensit\u00e9.',
      preview_signal:
        'Visualisation anim\u00e9e des chemins de signal de la source \u00e0 l\u2019univers vers la destination. Les particules en mouvement repr\u00e9sentent la communication en direct.',
      preview_delay:
        'R\u00e9glage du d\u00e9lai par destination (0\u201310 secondes). Id\u00e9al pour la synchronisation vid\u00e9o et la sortie diff\u00e9r\u00e9e des syst\u00e8mes de secours.',
      preview_device:
        'D\u00e9couverte automatique de tous les appareils du r\u00e9seau. Nodes Art-Net, passerelles sACN, ordinateurs et \u00e9quipements r\u00e9seau class\u00e9s par cat\u00e9gorie. Surveillance en temps r\u00e9el de l\u2019\u00e9tat en ligne/hors ligne.',
      download_label: 'Download',
      download_title: 'T\u00e9l\u00e9chargement',
      download_desc:
        'v2.7.17 \u2014 Enregistrement/lecture de signal, outil de test, Guardian et redondance cluster.',
      dl_win: 'Windows',
      dl_win_version: 'v2.7.17 \u00b7 Installer (.exe)',
      dl_win_portable: 'Windows Portable',
      dl_win_portable_version: 'v2.7.17 \u00b7 Portable (.exe)',
      dl_mac: 'macOS (Apple Silicon)',
      dl_mac_version: 'v2.7.17 \u00b7 DMG (.dmg)',
      mac_adp_notice: "Cette app est en attente d\u2019approbation du programme d\u00e9veloppeur Apple. En attendant, une autorisation en ligne de commande est n\u00e9cessaire.",
      mac_adp_link: 'Voir le manuel →',
      dl_btn: 'T\u00e9l\u00e9charger',
      disclaimer_p1:
        'ArtNet Manager est une application publi\u00e9e par <a href="https://github.com/llcheesell" target="_blank" rel="noopener">llcheesell</a> sous <a href="https://moov-stud.io" target="_blank" rel="noopener">MOOV by Composition Inc.</a> Bien que nous travaillions vers un logiciel pr\u00eat pour la production, il est actuellement en phase de test et n\u2019a pas \u00e9t\u00e9 enti\u00e8rement v\u00e9rifi\u00e9. Le d\u00e9veloppeur d\u00e9cline toute responsabilit\u00e9 pour les dommages ou incidents r\u00e9sultant de l\u2019utilisation de ce logiciel.',
      disclaimer_p2:
        'Nous construisons un outil fiable, ancr\u00e9 dans les besoins r\u00e9els de la production. Essayez-le et partagez vos rapports de bugs et retours. Vos contributions am\u00e9liorent cette application.',
      teaser_label: 'Coming Soon',
      teaser_title: 'Next Update',
      teaser_desc: 'Encore plus loin dans la prochaine version.',
      teaser_feat1_title: 'Pr\u00e9cision du routage signal',
      teaser_feat1_desc: 'Timers haute pr\u00e9cision, chemin de r\u00e9ception sans GC, r\u00e9solution timer 1ms. Jitter \u00e9limin\u00e9 pour un routage pr\u00e9cis au frame.',
      teaser_feat2_title: 'Enregistrement & lecture de signal',
      teaser_feat2_desc: 'Capturez les signaux DMX et rejouez-les avec pr\u00e9cision. Pour les r\u00e9p\u00e9titions, le d\u00e9bogage et la sauvegarde de spectacles.',
      feedback_label: 'Feedback',
      feedback_title: 'Partagez vos retours',
      feedback_desc: 'Signalez des bugs ou demandez des fonctionnalités. Vos retours orientent le développement.',
      feedback_btn: 'Rapport de bug / Demande de fonctionnalité',
      feedback_note: 'Nous construisons un outil fiable ancré dans les besoins réels de production. Vos retours améliorent cette app.',
      tech_label: 'Built With',
      tech_title: 'Stack technique',
      tech_desc:
        'Une application pr\u00eate pour la production, construite avec des technologies modernes.',
      footer_copy: '\u00a9 2026 MOOV by Composition Inc.',
    },

    es: {
      nav_features: 'Funciones',
      nav_preview: 'Vista previa',
      nav_screenshots: 'Capturas',
      nav_manual: 'Manual',
      screenshots_label: 'Screenshots',
      screenshots_title: 'Capturas de pantalla',
      screenshots_desc: 'Vea la aplicación en acción.',
      ss_tab_dashboard: 'Panel', ss_tab_universes: 'Visor de universos', ss_tab_flow: 'Flujo de señal',
      ss_tab_forwarding: 'Reenvío', ss_tab_discovery: 'Descubrimiento', ss_tab_dashboard2: 'Panel (50 universos)',
      ss_cap_dashboard: 'Visión general en tiempo real de universos activos, dispositivos descubiertos, destinos y tasa de paquetes.',
      nav_home: 'Inicio',
      nav_download: 'Descargar',
      hero_subtitle:
        'Gesti\u00f3n, visualizaci\u00f3n y reenv\u00edo unificados de se\u00f1ales Art-Net / sACN. Una herramienta DMX minimalista pero potente, dise\u00f1ada para producci\u00f3n en vivo.',
      badge_cross_platform: 'Cross-Platform',
      badge_minimal: 'Minimal & Powerful',
      hero_download_btn: 'Download v2.7.17',
      pillar1_label: 'Signal Management',
      pillar1_title: 'Integración y transmisión de señal',
      pillar1_desc: 'Recibir señales Art-Net / sACN y fusionar con HTP, LTP o Priority. Filtrado por universo, remapeo de offset, retardo y transmisión simultánea a múltiples destinos. Multi-NIC para gestión unificada entre subredes.',
      pillar2_label: 'Record & Playback',
      pillar2_title: 'Grabación y reproducción de señal',
      pillar2_desc: 'Grabar señales DMX en tiempo real. Formato ANMR con compresión delta para capturas largas y compactas. Reproducir en cualquier momento en modo Player — para ensayos, salida de respaldo o depuración.',
      pillar3_label: 'Visualization',
      pillar3_title: 'Visualización del flujo de señal',
      pillar3_desc: 'Visualización de cuadrícula de 512 canales, diagramas animados de rutas de señal desde fuentes a destinos pasando por universos, y estadísticas en tiempo real. Comprende los flujos de señal de un vistazo.',
      feat_checker_title: 'Herramienta de señal de prueba',
      feat_checker_desc: '12 patrones de prueba integrados (chase, aleatorio, gradiente, etc.). Envía señales de prueba directamente desde la app para verificación y solución de problemas.',
      feat_discovery_title: 'Descubrimiento de red',
      feat_discovery_desc: 'Escaneo de subred + ARP + DNS inverso para descubrir automáticamente todos los dispositivos. Desde nodos Art-Net y gateways sACN hasta infraestructura de red.',
      feat_guardian_title: 'Sistema Guardian',
      feat_guardian_desc: 'Un proceso externo monitorea la app permanentemente, recuperándose automáticamente de crashes, OOM y kill -9. Backoff exponencial incluido. Nunca se detiene durante un show en vivo.',
      feat_cluster_title: 'Backup PRIMARY-STANDBY',
      feat_cluster_desc: 'Configuración multi-instancia redundante. Elección automática de líder y monitoreo de salud para failover sin tiempo de inactividad. Transferencia de autoridad simplificada. Sincronización de configuración entre miembros del cluster.',
      feat_dual_title: 'Protocolo dual Art-Net y sACN',
      feat_dual_desc: 'Soporte completo para Art-Net 4 y sACN (E1.31). Conversión y puente automáticos entre protocolos. Multi-NIC para recepción simultánea desde diferentes subredes.',
      feat_config_title: 'Exportar e importar configuración',
      feat_config_desc: 'Guardar y cargar configuraciones de forwarding. Reutilizar ajustes entre venues y crear respaldos.',
      features_label: 'Features',
      features_title: 'Todo lo que necesitas en el sitio',
      features_desc:
        'Sin funciones innecesarias. Recepci\u00f3n, mezcla, monitorizaci\u00f3n, conversi\u00f3n y reenv\u00edo de se\u00f1ales DMX, todo en una interfaz limpia.',
      feat1_title: 'Visualizaci\u00f3n DMX en tiempo real',
      feat1_desc:
        'Visualiza los 512 canales en una cuadr\u00edcula en tiempo real. La intensidad codificada por colores permite detectar cambios de se\u00f1al al instante. Compatible con visualizaci\u00f3n simult\u00e1nea de m\u00faltiples universos.',
      feat2_title: 'Art-Net & sACN Protocolo dual',
      feat2_desc:
        'Compatibilidad completa con Art-Net 4 y sACN (E1.31). Conversi\u00f3n y puente autom\u00e1tico entre protocolos.',
      feat3_title: 'Motor de mezcla de universos',
      feat3_desc:
        'Mezcla autom\u00e1tica de se\u00f1ales DMX de m\u00faltiples fuentes mediante HTP (prioridad al valor m\u00e1s alto), LTP (prioridad al \u00faltimo valor) o prioridad. Procesamiento multi-fuente comparable a DMXking/ENTTEC eDMX.',
      feat4_title: 'Interfaz multi-red',
      feat4_desc:
        'Enlace simult\u00e1neo a m\u00faltiples NICs. Recibe y mezcla se\u00f1ales Art-Net/sACN de diferentes subredes. Cambio en caliente sin reiniciar la aplicaci\u00f3n.',
      feat5_title: 'Descubrimiento de dispositivos de red',
      feat5_desc:
        'Escaneo de subred + ARP + DNS inverso para descubrir autom\u00e1ticamente todos los dispositivos de la red. Detecci\u00f3n integral m\u00e1s all\u00e1 de los aparatos de iluminaci\u00f3n.',
      feat6_title: 'Visualizaci\u00f3n del flujo de se\u00f1al',
      feat6_desc:
        'Vista animada de las rutas de se\u00f1al desde las fuentes, pasando por los universos, hasta los destinos. Part\u00edculas en movimiento para una lectura intuitiva del estado de comunicaci\u00f3n.',
      feat7_title: 'Reenv\u00edo y enrutamiento',
      feat7_desc:
        'Filtrado de universos, remapeo de offsets y retardo (0\u201310 segundos) configurables por destino. Compatible con importaci\u00f3n/exportaci\u00f3n de configuraciones.',
      feat8_title: 'Sistema Guardian',
      feat8_desc:
        'Un proceso externo monitoriza continuamente la aplicaci\u00f3n y la recupera autom\u00e1ticamente de cualquier terminaci\u00f3n anormal, incluidos fallos, segfaults, OOM y kill -9. Con backoff exponencial. Tu show nunca se detiene.',
      feat9_title: 'Respaldo PRIMARY-STANDBY',
      feat9_desc:
        'Ejecuta m\u00faltiples instancias de ArtNet Manager en configuraci\u00f3n de redundancia PRIMARY-STANDBY. Elecci\u00f3n autom\u00e1tica de l\u00edder y monitorizaci\u00f3n de estado para conmutaci\u00f3n por error sin tiempo de inactividad.',
      preview_label: 'App Preview',
      preview_title: 'Interfaz',
      preview_desc:
        'Solo lo que necesitas, lo m\u00e1s r\u00e1pido posible. Una interfaz oscura y refinada para mantener el foco en el trabajo.',
      preview_universe:
        'Visualizaci\u00f3n en cuadr\u00edcula en tiempo real de los 512 valores DMX. Degradado azul\u2192cian\u2192blanco para visualizar la intensidad intuitivamente.',
      preview_signal:
        'Visualizaci\u00f3n animada de las rutas de se\u00f1al desde la fuente al universo y al destino. Part\u00edculas en movimiento representan la comunicaci\u00f3n en vivo.',
      preview_delay:
        'Ajuste de retardo por destino (0\u201310 segundos). Ideal para sincronizaci\u00f3n de v\u00eddeo y salida retardada de sistemas de respaldo.',
      preview_device:
        'Descubrimiento autom\u00e1tico de todos los dispositivos de la red. Nodos Art-Net, pasarelas sACN, ordenadores y equipos de red categorizados en una lista. Monitorizaci\u00f3n en tiempo real del estado online/offline.',
      download_label: 'Download',
      download_title: 'Descargar',
      download_desc:
        'v2.7.17 \u2014 Grabaci\u00f3n/reproducci\u00f3n de se\u00f1al, herramienta de prueba, Guardian y redundancia cluster.',
      dl_win: 'Windows',
      dl_win_version: 'v2.7.17 \u00b7 Installer (.exe)',
      dl_win_portable: 'Windows Portable',
      dl_win_portable_version: 'v2.7.17 \u00b7 Portable (.exe)',
      dl_mac: 'macOS (Apple Silicon)',
      dl_mac_version: 'v2.7.17 \u00b7 DMG (.dmg)',
      mac_adp_notice: 'Esta app está pendiente de aprobación del Apple Developer Program. Hasta entonces, se requiere permiso por línea de comandos.',
      mac_adp_link: 'Ver el manual →',
      dl_btn: 'Descargar',
      disclaimer_p1:
        'ArtNet Manager es una aplicaci\u00f3n publicada por <a href="https://github.com/llcheesell" target="_blank" rel="noopener">llcheesell</a> bajo <a href="https://moov-stud.io" target="_blank" rel="noopener">MOOV by Composition Inc.</a> Aunque trabajamos hacia un software listo para producci\u00f3n, actualmente se encuentra en fase de pruebas y no ha sido completamente verificado. El desarrollador no asume ninguna responsabilidad por da\u00f1os o incidentes derivados del uso de este software.',
      disclaimer_p2:
        'Estamos construyendo una herramienta fiable basada en las necesidades reales de producci\u00f3n. Pru\u00e9balo y comparte tus informes de errores y comentarios. Tu aportaci\u00f3n hace que esta app sea mejor.',
      teaser_label: 'Coming Soon',
      teaser_title: 'Next Update',
      teaser_desc: 'A\u00fan m\u00e1s profundo en la pr\u00f3xima versi\u00f3n.',
      teaser_feat1_title: 'Precisi\u00f3n del enrutamiento de se\u00f1al',
      teaser_feat1_desc: 'Temporizadores de alta precisi\u00f3n, ruta de recepci\u00f3n sin GC, resoluci\u00f3n de timer de 1ms. Jitter eliminado para un enrutamiento preciso por frame.',
      teaser_feat2_title: 'Grabaci\u00f3n y reproducci\u00f3n de se\u00f1al',
      teaser_feat2_desc: 'Captura se\u00f1ales DMX y repr\u00f3ducelas con precisi\u00f3n. Para ensayos, depuraci\u00f3n y respaldo de espect\u00e1culos en vivo.',
      feedback_label: 'Feedback',
      feedback_title: 'Comparte tu opinión',
      feedback_desc: 'Reporta bugs o solicita funciones. Tu opinión guía el desarrollo.',
      feedback_btn: 'Reporte de bug / Solicitud de función',
      feedback_note: 'Construimos una herramienta confiable basada en necesidades reales de producción. Tu feedback mejora esta app.',
      tech_label: 'Built With',
      tech_title: 'Stack tecnol\u00f3gico',
      tech_desc:
        'Una aplicaci\u00f3n lista para producci\u00f3n, construida con tecnolog\u00edas modernas.',
      footer_copy: '\u00a9 2026 MOOV by Composition Inc.',
    },

    it: {
      nav_features: 'Funzionalit\u00e0',
      nav_preview: 'Anteprima',
      nav_screenshots: 'Screenshot',
      nav_manual: 'Manuale',
      nav_home: 'Home',
      nav_download: 'Scarica',
      screenshots_label: 'Screenshots', screenshots_title: 'Schermate', screenshots_desc: "Guarda l'applicazione in azione.",
      ss_tab_dashboard: 'Dashboard', ss_tab_universes: 'Visualizzatore universo', ss_tab_flow: 'Flusso segnale',
      ss_tab_forwarding: 'Inoltro', ss_tab_discovery: 'Scoperta dispositivi', ss_tab_dashboard2: 'Dashboard (50 universi)',
      ss_cap_dashboard: 'Panoramica in tempo reale di universi attivi, dispositivi scoperti, destinazioni e velocit\u00e0 pacchetti.',
      hero_subtitle:
        'Gestione, visualizzazione e forwarding unificati dei segnali Art-Net / sACN. Uno strumento DMX minimale ma potente, progettato per la produzione live.',
      badge_cross_platform: 'Cross-Platform',
      badge_minimal: 'Minimal & Powerful',
      hero_download_btn: 'Download v2.7.17',
      pillar1_label: 'Signal Management',
      pillar1_title: 'Integrazione e trasmissione del segnale',
      pillar1_desc: 'Ricevi segnali Art-Net / sACN e unisci con HTP, LTP o Priority. Filtraggio per universo, remapping offset, ritardo e trasmissione simultanea a più destinazioni. Multi-NIC per gestione unificata tra sottoreti.',
      pillar2_label: 'Record & Playback',
      pillar2_title: 'Registrazione e riproduzione del segnale',
      pillar2_desc: 'Registra segnali DMX in tempo reale. Formato ANMR con compressione delta per catture lunghe e compatte. Riproduci in qualsiasi momento in modalità Player — per prove, uscita di backup o debug.',
      pillar3_label: 'Visualization',
      pillar3_title: 'Visualizzazione del flusso di segnale',
      pillar3_desc: 'Griglia a 512 canali, diagrammi animati dei percorsi del segnale dalle sorgenti alle destinazioni attraverso gli universi, e statistiche in tempo reale. Comprendi i flussi di segnale a colpo d\'occhio.',
      feat_checker_title: 'Strumento segnale di test',
      feat_checker_desc: '12 pattern di test integrati (chase, casuale, gradiente, ecc.). Invia segnali di test direttamente dall\'app per verifica dispositivi e troubleshooting.',
      feat_discovery_title: 'Scoperta dispositivi di rete',
      feat_discovery_desc: 'Scansione sottorete + ARP + DNS inverso per scoprire automaticamente tutti i dispositivi. Da nodi Art-Net e gateway sACN all\'infrastruttura di rete.',
      feat_guardian_title: 'Sistema Guardian',
      feat_guardian_desc: 'Un processo esterno monitora l\'app costantemente, recuperando automaticamente da crash, OOM e kill -9. Backoff esponenziale incluso. Non si ferma mai durante uno show dal vivo.',
      feat_cluster_title: 'Backup PRIMARY-STANDBY',
      feat_cluster_desc: 'Configurazione multi-istanza ridondante. Elezione automatica del leader e monitoraggio della salute per failover senza tempi morti. Trasferimento di autorità semplificato. Sincronizzazione configurazione tra membri del cluster.',
      feat_dual_title: 'Doppio protocollo Art-Net e sACN',
      feat_dual_desc: 'Supporto completo per Art-Net 4 e sACN (E1.31). Conversione e bridging automatici tra protocolli. Multi-NIC per ricezione simultanea da sottoreti diverse.',
      feat_config_title: 'Esportazione e importazione config',
      feat_config_desc: 'Salva e carica le configurazioni di forwarding. Riutilizza le impostazioni tra venue e crea backup.',
      features_label: 'Features',
      features_title: 'Tutto ciò che serve sul campo',
      features_desc:
        'Nessuna funzione superflua. Ricezione, merge, monitoraggio, conversione e inoltro dei segnali DMX in un\u2019interfaccia pulita.',
      feat1_title: 'Visualizzazione DMX in tempo reale',
      feat1_desc:
        'Visualizza tutti i 512 canali in una griglia in tempo reale. L\u2019intensit\u00e0 codificata a colori permette di individuare istantaneamente i cambiamenti di segnale. Supporto per la visualizzazione simultanea multi-universo.',
      feat2_title: 'Art-Net & sACN Doppio protocollo',
      feat2_desc:
        'Supporto completo per Art-Net 4 e sACN (E1.31). Conversione e bridging automatico tra protocolli.',
      feat3_title: 'Motore di merge degli universi',
      feat3_desc:
        'Merge automatico dei segnali DMX da sorgenti multiple tramite HTP (priorit\u00e0 al valore pi\u00f9 alto), LTP (priorit\u00e0 all\u2019ultimo valore) o priorit\u00e0. Elaborazione multi-sorgente alla pari con DMXking/ENTTEC eDMX.',
      feat4_title: 'Interfaccia multi-rete',
      feat4_desc:
        'Binding simultaneo su pi\u00f9 NIC. Ricevi e unisci segnali Art-Net/sACN da sottoreti diverse. Hot-switch senza riavvio dell\u2019applicazione.',
      feat5_title: 'Scoperta dispositivi di rete',
      feat5_desc:
        'Scansione subnet + ARP + DNS inverso per scoprire automaticamente tutti i dispositivi sulla rete. Rilevamento completo oltre ai soli apparecchi di illuminazione.',
      feat6_title: 'Visualizzazione del flusso di segnale',
      feat6_desc:
        'Vista animata dei percorsi di segnale dalle sorgenti attraverso gli universi fino alle destinazioni. Particelle in movimento per una lettura intuitiva dello stato di comunicazione.',
      feat7_title: 'Forwarding e routing',
      feat7_desc:
        'Filtraggio universi, remapping degli offset e ritardo (0\u201310 secondi) configurabili per destinazione. Supporto import/export delle configurazioni.',
      feat8_title: 'Sistema Guardian',
      feat8_desc:
        'Un processo esterno monitora continuamente l\u2019applicazione e garantisce il ripristino automatico da qualsiasi terminazione anomala \u2014 crash, segfault, OOM e kill -9 inclusi. Con backoff esponenziale. Il tuo spettacolo non si ferma mai.',
      feat9_title: 'Backup PRIMARY-STANDBY',
      feat9_desc:
        'Esegui pi\u00f9 istanze di ArtNet Manager in configurazione di ridondanza PRIMARY-STANDBY. Elezione automatica del leader e monitoraggio della salute per un failover senza tempi di inattivit\u00e0.',
      preview_label: 'App Preview',
      preview_title: 'Interfaccia',
      preview_desc:
        'Solo ci\u00f2 che serve, il pi\u00f9 velocemente possibile. Un\u2019interfaccia scura e raffinata per restare concentrati sul lavoro.',
      preview_universe:
        'Visualizzazione a griglia in tempo reale dei 512 valori DMX. Gradiente blu\u2192ciano\u2192bianco per una visualizzazione intuitiva dell\u2019intensit\u00e0.',
      preview_signal:
        'Visualizzazione animata dei percorsi di segnale dalla sorgente all\u2019universo alla destinazione. Particelle in movimento rappresentano la comunicazione live.',
      preview_delay:
        'Impostazione del ritardo per destinazione (0\u201310 secondi). Ideale per la sincronizzazione video e l\u2019uscita ritardata dei sistemi di backup.',
      preview_device:
        'Scoperta automatica di tutti i dispositivi sulla rete. Nodi Art-Net, gateway sACN, computer e apparecchiature di rete categorizzati in un elenco. Monitoraggio in tempo reale dello stato online/offline.',
      download_label: 'Download',
      download_title: 'Scarica',
      download_desc:
        'v2.7.17 \u2014 Registrazione/riproduzione segnale, strumento di test, Guardian e ridondanza cluster.',
      dl_win: 'Windows',
      dl_win_version: 'v2.7.17 \u00b7 Installer (.exe)',
      dl_win_portable: 'Windows Portable',
      dl_win_portable_version: 'v2.7.17 \u00b7 Portable (.exe)',
      dl_mac: 'macOS (Apple Silicon)',
      dl_mac_version: 'v2.7.17 \u00b7 DMG (.dmg)',
      mac_adp_notice: "Questa app \u00e8 in attesa di approvazione dal Apple Developer Program. Nel frattempo \u00e8 necessaria l\u2019autorizzazione da riga di comando.",
      mac_adp_link: 'Vedi il manuale →',
      dl_btn: 'Scarica',
      disclaimer_p1:
        'ArtNet Manager \u00e8 un\u2019applicazione rilasciata da <a href="https://github.com/llcheesell" target="_blank" rel="noopener">llcheesell</a> sotto <a href="https://moov-stud.io" target="_blank" rel="noopener">MOOV by Composition Inc.</a> Sebbene stiamo lavorando a un software pronto per la produzione, \u00e8 attualmente in fase di test e non \u00e8 stato completamente verificato. Lo sviluppatore non si assume alcuna responsabilit\u00e0 per danni o incidenti derivanti dall\u2019uso di questo software.',
      disclaimer_p2:
        'Stiamo costruendo uno strumento affidabile radicato nelle reali esigenze della produzione. Provatelo e condividete le vostre segnalazioni di bug e i vostri feedback. Il vostro contributo rende quest\u2019app migliore.',
      teaser_label: 'Coming Soon',
      teaser_title: 'Next Update',
      teaser_desc: 'Ancora pi\u00f9 a fondo nella prossima versione.',
      teaser_feat1_title: 'Precisione del routing segnale',
      teaser_feat1_desc: 'Timer ad alta precisione, percorso di ricezione senza GC, risoluzione timer 1ms. Jitter eliminato per un routing preciso al frame.',
      teaser_feat2_title: 'Registrazione e riproduzione del segnale',
      teaser_feat2_desc: 'Cattura i segnali DMX e riproducili con precisione. Per prove, debug e backup di spettacoli dal vivo.',
      feedback_label: 'Feedback',
      feedback_title: 'Condividi il tuo feedback',
      feedback_desc: 'Segnala bug o richiedi funzionalità. Il tuo contributo guida lo sviluppo.',
      feedback_btn: 'Segnalazione bug / Richiesta funzionalità',
      feedback_note: 'Costruiamo uno strumento affidabile radicato nelle esigenze reali della produzione. Il tuo feedback migliora questa app.',
      tech_label: 'Built With',
      tech_title: 'Stack tecnologico',
      tech_desc:
        'Un\u2019applicazione pronta per la produzione, costruita con tecnologie moderne.',
      footer_copy: '\u00a9 2026 MOOV by Composition Inc.',
    },

    nl: {
      nav_features: 'Functies',
      nav_preview: 'Voorbeeld',
      nav_screenshots: 'Screenshots',
      nav_manual: 'Handleiding',
      screenshots_label: 'Screenshots',
      screenshots_title: 'App-screenshots',
      screenshots_desc: 'Bekijk de applicatie in actie.',
      ss_tab_dashboard: 'Dashboard', ss_tab_universes: 'Universe Viewer', ss_tab_flow: 'Signaalstroom',
      ss_tab_forwarding: 'Doorsturen', ss_tab_discovery: 'Apparaatdetectie', ss_tab_dashboard2: 'Dashboard (50 universes)',
      ss_cap_dashboard: 'Realtime overzicht van actieve universes, gedetecteerde apparaten, bestemmingen en pakketsnelheid.',
      nav_home: 'Home',
      nav_download: 'Downloaden',
      hero_subtitle:
        'Ge\u00efntegreerd beheer, visualisatie en forwarding van Art-Net / sACN signalen. Een minimalistische maar krachtige DMX-tool, gebouwd voor liveproductie.',
      badge_cross_platform: 'Cross-Platform',
      badge_minimal: 'Minimal & Powerful',
      hero_download_btn: 'Download v2.7.17',
      pillar1_label: 'Signal Management',
      pillar1_title: 'Signaalintegratie & transmissie',
      pillar1_desc: 'Ontvang Art-Net / sACN signalen en voeg samen met HTP, LTP of Priority. Universe-filtering, offset-remapping, vertraging en gelijktijdige doorsturen naar meerdere bestemmingen. Multi-NIC voor uniforme beheer over subnetten.',
      pillar2_label: 'Record & Playback',
      pillar2_title: 'Signaalopname & afspelen',
      pillar2_desc: 'DMX-signalen in realtime opnemen. Delta-gecomprimeerd ANMR-formaat voor compacte langdurige opnames. Op elk moment afspelen in Player-modus — voor repetities, backup-uitvoer of debugging.',
      pillar3_label: 'Visualization',
      pillar3_title: 'Signaalstroom-visualisatie',
      pillar3_desc: '512-kanaals rasterweergave, geanimeerde signaalpad-diagrammen van bronnen via universen naar bestemmingen, en realtime dashboard-statistieken. Begrijp signaalstromen in één oogopslag.',
      feat_checker_title: 'Testsignaal-tool',
      feat_checker_desc: '12 ingebouwde testpatronen (chase, willekeurig, gradient, enz.). Stuur testsignalen rechtstreeks vanuit de app voor apparaatverificatie en probleemoplossing.',
      feat_discovery_title: 'Netwerkapparatuurontdekking',
      feat_discovery_desc: 'Subnet-scan + ARP + reverse DNS ontdekt automatisch alle netwerkapparaten. Van Art-Net nodes en sACN gateways tot netwerkinfrastructuur.',
      feat_guardian_title: 'Guardian-systeem',
      feat_guardian_desc: 'Een extern proces bewaakt de app voortdurend en herstelt automatisch van crashes, OOM en kill -9. Exponentiële backoff inbegrepen. Stopt nooit tijdens een live show.',
      feat_cluster_title: 'PRIMARY-STANDBY Backup',
      feat_cluster_desc: 'Redundante multi-instance configuratie. Automatische leaderverkiezing en health monitoring voor failover zonder downtime. Eenvoudige autoriteitoverdracht. Configuratiesynchronisatie tussen clusterleden.',
      feat_dual_title: 'Duaal protocol Art-Net & sACN',
      feat_dual_desc: 'Volledige ondersteuning voor Art-Net 4 en sACN (E1.31). Automatische protocolconversie en bridging. Multi-NIC voor gelijktijdige ontvangst vanuit verschillende subnetten.',
      feat_config_title: 'Configuratie exporteren & importeren',
      feat_config_desc: 'Forwarding-configuraties opslaan en laden. Instellingen hergebruiken tussen locaties en backups maken.',
      features_label: 'Features',
      features_title: 'Alles wat je nodig hebt op locatie',
      features_desc:
        'Geen overbodige functies. Ontvangen, mergen, monitoren, converteren en doorsturen van DMX-signalen \u2014 alles in \u00e9\u00e9n overzichtelijke interface.',
      feat1_title: 'Realtime DMX-visualisatie',
      feat1_desc:
        'Bekijk alle 512 kanalen in een realtime raster. Kleurgecodeerde intensiteit laat je signaalwijzigingen direct herkennen. Multi-universe gelijktijdige weergave wordt ondersteund.',
      feat2_title: 'Art-Net & sACN Duaal protocol',
      feat2_desc:
        'Volledige ondersteuning voor zowel Art-Net 4 als sACN (E1.31). Automatische protocolconversie en bridging naadloos ge\u00efntegreerd.',
      feat3_title: 'Universe merge-engine',
      feat3_desc:
        'Automatisch mergen van DMX-signalen van meerdere bronnen via HTP (hoogste waarde heeft voorrang), LTP (laatste waarde heeft voorrang) of prioriteit. Multi-source verwerking op het niveau van DMXking/ENTTEC eDMX.',
      feat4_title: 'Multi-netwerkinterface',
      feat4_desc:
        'Gelijktijdig binden aan meerdere NICs. Ontvang en merge Art-Net/sACN-signalen uit verschillende subnetten. Hot-switch zonder herstart van de applicatie.',
      feat5_title: 'Netwerkapparaatdetectie',
      feat5_desc:
        'Subnet-scan + ARP + reverse DNS om automatisch alle apparaten op het netwerk te ontdekken. Uitgebreide detectie \u2014 niet alleen verlichtingsapparatuur.',
      feat6_title: 'Signaalstroomvisualisatie',
      feat6_desc:
        'Geanimeerde weergave van signaalpaden van bronnen via universes naar bestemmingen. Stromende deeltjes geven een intu\u00eftief beeld van de live communicatiestatus.',
      feat7_title: 'Forwarding & Routing',
      feat7_desc:
        'Universe-filtering, offset-remapping en vertraging (0\u201310 seconden) per bestemming configureerbaar. Import/export van configuraties wordt ondersteund.',
      feat8_title: 'Guardian-systeem',
      feat8_desc:
        'Een extern proces bewaakt de applicatie continu en herstelt deze automatisch na elke abnormale be\u00ebindiging \u2014 inclusief crashes, segfaults, OOM en kill -9. Met exponenti\u00eble backoff. Je show stopt nooit.',
      feat9_title: 'PRIMARY-STANDBY Backup',
      feat9_desc:
        'Draai meerdere ArtNet Manager-instanties in een PRIMARY-STANDBY redundantieconfiguratie. Automatische leaderverkiezing en gezondheidsmonitoring voor failover zonder downtime.',
      preview_label: 'App Preview',
      preview_title: 'Interface',
      preview_desc:
        'Alleen wat je nodig hebt, zo snel mogelijk. Een strak donker thema zodat je gefocust blijft op het werk.',
      preview_universe:
        'Realtime rasterweergave van alle 512 DMX-kanaalwaarden. Blauw\u2192cyaan\u2192wit gradi\u00ebnt voor intu\u00eftieve intensiteitsvisualisatie.',
      preview_signal:
        'Geanimeerde visualisatie van signaalpaden van bron naar universe naar bestemming. Stromende deeltjes vertegenwoordigen live communicatie.',
      preview_delay:
        'Vertragingsinstelling per bestemming (0\u201310 seconden). Ideaal voor videosynchronisatie en vertraagde output van back-upsystemen.',
      preview_device:
        'Automatische detectie van alle apparaten op het netwerk. Art-Net-nodes, sACN-gateways, computers en netwerkapparatuur gecategoriseerd weergegeven. Realtime monitoring van online/offline status.',
      download_label: 'Download',
      download_title: 'Downloaden',
      download_desc:
        'v2.7.17 \u2014 Signaalopname/-afspelen, testsignaal-tool, Guardian en cluster-redundantie.',
      dl_win: 'Windows',
      dl_win_version: 'v2.7.17 \u00b7 Installer (.exe)',
      dl_win_portable: 'Windows Portable',
      dl_win_portable_version: 'v2.7.17 \u00b7 Portable (.exe)',
      dl_mac: 'macOS (Apple Silicon)',
      dl_mac_version: 'v2.7.17 \u00b7 DMG (.dmg)',
      mac_adp_notice: 'Deze app wacht op goedkeuring van het Apple Developer Program. In de tussentijd is opdrachtregel-toestemming vereist.',
      mac_adp_link: 'Zie de handleiding →',
      dl_btn: 'Downloaden',
      disclaimer_p1:
        'ArtNet Manager is een applicatie uitgebracht door <a href="https://github.com/llcheesell" target="_blank" rel="noopener">llcheesell</a> onder <a href="https://moov-stud.io" target="_blank" rel="noopener">MOOV by Composition Inc.</a> Hoewel we toewerken naar productierijpe software, bevindt deze zich momenteel in de testfase en is nog niet volledig geverifieerd. De ontwikkelaar aanvaardt geen aansprakelijkheid voor schade of incidenten die voortvloeien uit het gebruik van deze software.',
      disclaimer_p2:
        'We bouwen een betrouwbare tool geworteld in de werkelijke behoeften van de productie. Probeer het uit en deel je bugrapporten en feedback. Jouw bijdrage maakt deze app beter.',
      teaser_label: 'Coming Soon',
      teaser_title: 'Next Update',
      teaser_desc: 'Nog dieper in de volgende versie.',
      teaser_feat1_title: 'Signaalrouting-precisie',
      teaser_feat1_desc: 'Hoogprecisie timers, GC-vrij ontvangstpad, 1ms timer-resolutie. Jitter ge\u00eblimineerd voor framenauwkeurige routing.',
      teaser_feat2_title: 'Signaalopname & -weergave',
      teaser_feat2_desc: 'Leg DMX-signalen vast en speel ze nauwkeurig af. Voor repetities, debugging en live-show back-up.',
      feedback_label: 'Feedback',
      feedback_title: 'Deel uw feedback',
      feedback_desc: 'Meld bugs of vraag functies aan. Uw input stuurt de ontwikkeling.',
      feedback_btn: 'Bugrapport / Functieverzoek',
      feedback_note: 'We bouwen een betrouwbare tool geworteld in echte productiebehoeften. Uw feedback maakt deze app beter.',
      tech_label: 'Built With',
      tech_title: 'Technologie-stack',
      tech_desc:
        'Een productierijpe applicatie, gebouwd met moderne technologie\u00ebn.',
      footer_copy: '\u00a9 2026 MOOV by Composition Inc.',
    },

    pt: {
      nav_features: 'Funcionalidades',
      nav_preview: 'Pr\u00e9via',
      nav_screenshots: 'Capturas',
      nav_manual: 'Manual',
      nav_home: 'Início',
      nav_download: 'Download',
      screenshots_label: 'Screenshots', screenshots_title: 'Capturas de ecr\u00e3', screenshots_desc: 'Veja a aplica\u00e7\u00e3o em a\u00e7\u00e3o.',
      ss_tab_dashboard: 'Painel', ss_tab_universes: 'Visualizador de universo', ss_tab_flow: 'Fluxo de sinal',
      ss_tab_forwarding: 'Encaminhamento', ss_tab_discovery: 'Descoberta', ss_tab_dashboard2: 'Painel (50 universos)',
      ss_cap_dashboard: 'Vis\u00e3o geral em tempo real de universos ativos, dispositivos, destinos e taxa de pacotes.',
      hero_subtitle:
        'Gest\u00e3o, visualiza\u00e7\u00e3o e encaminhamento unificados de sinais Art-Net / sACN. Uma ferramenta DMX minimalista mas poderosa, feita para produ\u00e7\u00e3o ao vivo.',
      badge_cross_platform: 'Cross-Platform',
      badge_minimal: 'Minimal & Powerful',
      hero_download_btn: 'Download v2.7.17',
      pillar1_label: 'Signal Management',
      pillar1_title: 'Integração e transmissão de sinal',
      pillar1_desc: 'Receba sinais Art-Net / sACN e combine com HTP, LTP ou Priority. Filtragem por universo, remapeamento de offset, atraso e transmissão simultânea para múltiplos destinos. Multi-NIC para gestão unificada entre sub-redes.',
      pillar2_label: 'Record & Playback',
      pillar2_title: 'Gravação e reprodução de sinal',
      pillar2_desc: 'Grave sinais DMX em tempo real. Formato ANMR com compressão delta para capturas longas e compactas. Reproduza a qualquer momento no modo Player — para ensaios, saída de backup ou depuração.',
      pillar3_label: 'Visualization',
      pillar3_title: 'Visualização do fluxo de sinal',
      pillar3_desc: 'Grade de 512 canais, diagramas animados de caminhos de sinal de fontes a destinos via universos, e estatísticas em tempo real. Compreenda os fluxos de sinal num relance.',
      feat_checker_title: 'Ferramenta de sinal de teste',
      feat_checker_desc: '12 padrões de teste integrados (chase, aleatório, gradiente, etc.). Envie sinais de teste diretamente do app para verificação de dispositivos e resolução de problemas.',
      feat_discovery_title: 'Descoberta de dispositivos de rede',
      feat_discovery_desc: 'Scan de sub-rede + ARP + DNS reverso descobre automaticamente todos os dispositivos. De nós Art-Net e gateways sACN à infraestrutura de rede.',
      feat_guardian_title: 'Sistema Guardian',
      feat_guardian_desc: 'Um processo externo monitora o app constantemente, recuperando automaticamente de crashes, OOM e kill -9. Backoff exponencial incluído. Nunca para durante um show ao vivo.',
      feat_cluster_title: 'Backup PRIMARY-STANDBY',
      feat_cluster_desc: 'Configuração multi-instância redundante. Eleição automática de líder e monitoramento de saúde para failover sem tempo de inatividade. Transferência de autoridade simplificada. Sincronização de configuração entre membros do cluster.',
      feat_dual_title: 'Protocolo duplo Art-Net e sACN',
      feat_dual_desc: 'Suporte completo para Art-Net 4 e sACN (E1.31). Conversão e ponte automáticas entre protocolos. Multi-NIC para recepção simultânea de diferentes sub-redes.',
      feat_config_title: 'Exportar e importar configuração',
      feat_config_desc: 'Salvar e carregar configurações de forwarding. Reutilizar configurações entre locais e criar backups.',
      features_label: 'Features',
      features_title: 'Tudo o que você precisa no local',
      features_desc:
        'Sem excessos. Rece\u00e7\u00e3o, fus\u00e3o, monitoriza\u00e7\u00e3o, convers\u00e3o e encaminhamento de sinais DMX \u2014 tudo numa interface limpa.',
      feat1_title: 'Visualiza\u00e7\u00e3o DMX em tempo real',
      feat1_desc:
        'Visualize todos os 512 canais numa grelha em tempo real. A intensidade codificada por cores permite detetar instantaneamente altera\u00e7\u00f5es de sinal. Suporte para visualiza\u00e7\u00e3o simult\u00e2nea de m\u00faltiplos universos.',
      feat2_title: 'Art-Net & sACN Protocolo duplo',
      feat2_desc:
        'Suporte completo para Art-Net 4 e sACN (E1.31). Convers\u00e3o e bridging autom\u00e1tico entre protocolos.',
      feat3_title: 'Motor de fus\u00e3o de universos',
      feat3_desc:
        'Fus\u00e3o autom\u00e1tica de sinais DMX de m\u00faltiplas fontes utilizando HTP (prioridade ao valor mais alto), LTP (prioridade ao \u00faltimo valor) ou prioridade. Processamento multi-fonte ao n\u00edvel do DMXking/ENTTEC eDMX.',
      feat4_title: 'Interface multi-rede',
      feat4_desc:
        'Liga\u00e7\u00e3o simult\u00e2nea a m\u00faltiplas NICs. Receba e funda sinais Art-Net/sACN de sub-redes diferentes. Hot-switch sem reiniciar a aplica\u00e7\u00e3o.',
      feat5_title: 'Descoberta de dispositivos de rede',
      feat5_desc:
        'Scan de sub-rede + ARP + DNS reverso para descobrir automaticamente todos os dispositivos na rede. Dete\u00e7\u00e3o abrangente para al\u00e9m de equipamentos de ilumina\u00e7\u00e3o.',
      feat6_title: 'Visualiza\u00e7\u00e3o do fluxo de sinal',
      feat6_desc:
        'Vista animada dos caminhos de sinal desde as fontes, passando pelos universos, at\u00e9 aos destinos. Part\u00edculas em movimento para uma leitura intuitiva do estado de comunica\u00e7\u00e3o.',
      feat7_title: 'Encaminhamento e roteamento',
      feat7_desc:
        'Filtragem de universos, remapeamento de offsets e atraso (0\u201310 segundos) configur\u00e1veis por destino. Suporte para importa\u00e7\u00e3o/exporta\u00e7\u00e3o de configura\u00e7\u00f5es.',
      feat8_title: 'Sistema Guardian',
      feat8_desc:
        'Um processo externo monitoriza continuamente a aplica\u00e7\u00e3o e garante recupera\u00e7\u00e3o autom\u00e1tica de qualquer termina\u00e7\u00e3o anormal \u2014 incluindo crashes, segfaults, OOM e kill -9. Com backoff exponencial. O seu show nunca para.',
      feat9_title: 'Backup PRIMARY-STANDBY',
      feat9_desc:
        'Execute m\u00faltiplas inst\u00e2ncias do ArtNet Manager em configura\u00e7\u00e3o de redund\u00e2ncia PRIMARY-STANDBY. Elei\u00e7\u00e3o autom\u00e1tica de l\u00edder e monitoriza\u00e7\u00e3o de sa\u00fade para failover sem tempo de inatividade.',
      preview_label: 'App Preview',
      preview_title: 'Interface',
      preview_desc:
        'Apenas o que precisa, o mais r\u00e1pido poss\u00edvel. Uma interface escura e refinada para manter o foco no trabalho.',
      preview_universe:
        'Visualiza\u00e7\u00e3o em grelha em tempo real dos 512 valores DMX. Gradiente azul\u2192ciano\u2192branco para visualiza\u00e7\u00e3o intuitiva da intensidade.',
      preview_signal:
        'Visualiza\u00e7\u00e3o animada dos caminhos de sinal da fonte ao universo e ao destino. Part\u00edculas em movimento representam a comunica\u00e7\u00e3o ao vivo.',
      preview_delay:
        'Configura\u00e7\u00e3o de atraso por destino (0\u201310 segundos). Ideal para sincroniza\u00e7\u00e3o de v\u00eddeo e sa\u00edda atrasada de sistemas de backup.',
      preview_device:
        'Descoberta autom\u00e1tica de todos os dispositivos na rede. N\u00f3s Art-Net, gateways sACN, computadores e equipamentos de rede categorizados numa lista. Monitoriza\u00e7\u00e3o em tempo real do estado online/offline.',
      download_label: 'Download',
      download_title: 'Download',
      download_desc:
        'v2.7.17 \u2014 Grava\u00e7\u00e3o/reprodu\u00e7\u00e3o de sinal, ferramenta de teste, Guardian e redund\u00e2ncia de cluster.',
      dl_win: 'Windows',
      dl_win_version: 'v2.7.17 \u00b7 Installer (.exe)',
      dl_win_portable: 'Windows Portable',
      dl_win_portable_version: 'v2.7.17 \u00b7 Portable (.exe)',
      dl_mac: 'macOS (Apple Silicon)',
      dl_mac_version: 'v2.7.17 \u00b7 DMG (.dmg)',
      mac_adp_notice: 'Esta app aguarda aprovação do Apple Developer Program. Até então, é necessária permissão por linha de comandos.',
      mac_adp_link: 'Ver o manual →',
      dl_btn: 'Download',
      disclaimer_p1:
        'ArtNet Manager \u00e9 uma aplica\u00e7\u00e3o lan\u00e7ada por <a href="https://github.com/llcheesell" target="_blank" rel="noopener">llcheesell</a> sob <a href="https://moov-stud.io" target="_blank" rel="noopener">MOOV by Composition Inc.</a> Embora estejamos a trabalhar para um software pronto para produ\u00e7\u00e3o, encontra-se atualmente em fase de testes e n\u00e3o foi totalmente verificado. O desenvolvedor n\u00e3o assume qualquer responsabilidade por danos ou incidentes resultantes do uso deste software.',
      disclaimer_p2:
        'Estamos a construir uma ferramenta fi\u00e1vel baseada nas necessidades reais da produ\u00e7\u00e3o. Experimente e partilhe os seus relat\u00f3rios de bugs e feedback. A sua contribui\u00e7\u00e3o torna esta app melhor.',
      teaser_label: 'Coming Soon',
      teaser_title: 'Next Update',
      teaser_desc: 'Ainda mais fundo na pr\u00f3xima vers\u00e3o.',
      teaser_feat1_title: 'Precis\u00e3o do roteamento de sinal',
      teaser_feat1_desc: 'Timers de alta precis\u00e3o, caminho de rece\u00e7\u00e3o sem GC, resolu\u00e7\u00e3o de timer de 1ms. Jitter eliminado para roteamento preciso por frame.',
      teaser_feat2_title: 'Grava\u00e7\u00e3o e reprodu\u00e7\u00e3o de sinal',
      teaser_feat2_desc: 'Capture sinais DMX e reproduza-os com precis\u00e3o. Para ensaios, depura\u00e7\u00e3o e backup de espet\u00e1culos ao vivo.',
      feedback_label: 'Feedback',
      feedback_title: 'Compartilhe seu feedback',
      feedback_desc: 'Reporte bugs ou solicite recursos. Sua opinião guia o desenvolvimento.',
      feedback_btn: 'Relatório de bug / Solicitação de recurso',
      feedback_note: 'Construímos uma ferramenta confiável baseada em necessidades reais de produção. Seu feedback melhora este app.',
      tech_label: 'Built With',
      tech_title: 'Stack tecnol\u00f3gico',
      tech_desc:
        'Uma aplica\u00e7\u00e3o pronta para produ\u00e7\u00e3o, constru\u00edda com tecnologias modernas.',
      footer_copy: '\u00a9 2026 MOOV by Composition Inc.',
    },

    ko: {
      nav_features: '\uae30\ub2a5',
      nav_preview: '\ubbf8\ub9ac\ubcf4\uae30',
      nav_screenshots: '\uc2a4\ud06c\ub9b0\uc0f7',
      nav_manual: '매뉴얼',
      nav_home: '홈',
      nav_download: '\ub2e4\uc6b4\ub85c\ub4dc',
      screenshots_label: 'Screenshots', screenshots_title: '\uc571 \ud654\uba74', screenshots_desc: '\uc2e4\uc81c \uc571 \ud654\uba74\uc744 \ud655\uc778\ud558\uc138\uc694.',
      ss_tab_dashboard: '\ub300\uc2dc\ubcf4\ub4dc', ss_tab_universes: '\uc720\ub2c8\ubc84\uc2a4 \ubdf0\uc5b4', ss_tab_flow: '\uc2e0\ud638 \ud750\ub984',
      ss_tab_forwarding: '\uc804\uc1a1', ss_tab_discovery: '\uc7a5\uce58 \uac80\uc0c9', ss_tab_dashboard2: '\ub300\uc2dc\ubcf4\ub4dc (50 \uc720\ub2c8\ubc84\uc2a4)',
      ss_cap_dashboard: '\ud65c\uc131 \uc720\ub2c8\ubc84\uc2a4, \uac80\uc0c9\ub41c \uc7a5\uce58, \ubaa9\uc801\uc9c0 \ubc0f \ud328\ud0b7 \uc18d\ub3c4\uc758 \uc2e4\uc2dc\uac04 \uac1c\uc694.',
      hero_subtitle:
        'Art-Net / sACN \uc2e0\ud638\uc758 \uad00\ub9ac, \uc2dc\uac01\ud654, \ud3ec\uc6cc\ub529\uc744 \ud1b5\ud569. \ubbf8\ub2c8\uba40\ud558\uc9c0\ub9cc \uac15\ub825\ud55c, \ub77c\uc774\ube0c \ud504\ub85c\ub355\uc158 \ud604\uc7a5\uc744 \uc704\ud55c DMX \ud234.',
      badge_cross_platform: 'Cross-Platform',
      badge_minimal: 'Minimal & Powerful',
      hero_download_btn: 'Download v2.7.17',
      pillar1_label: 'Signal Management',
      pillar1_title: '신호 통합 및 전송',
      pillar1_desc: 'Art-Net / sACN 신호를 수신하고 HTP, LTP 또는 Priority로 병합. 유니버스별 필터링, 오프셋 리매핑, 지연 설정 및 여러 대상에 동시 전달. 다중 NIC로 서브넷 간 통합 관리.',
      pillar2_label: 'Record & Playback',
      pillar2_title: '신호 녹화 및 재생',
      pillar2_desc: 'DMX 신호를 실시간으로 녹화. 델타 압축 ANMR 포맷으로 긴 캡처도 컴팩트하게. Player 모드에서 언제든 재생 — 리허설 기록, 백업 출력 또는 디버깅에.',
      pillar3_label: 'Visualization',
      pillar3_title: '신호 흐름 시각화',
      pillar3_desc: '512채널 그리드 표시, 소스에서 유니버스를 거쳐 목적지까지의 애니메이션 신호 경로 다이어그램, 실시간 대시보드 통계. 신호 흐름을 한눈에 파악.',
      feat_checker_title: '테스트 신호 도구',
      feat_checker_desc: '12가지 내장 테스트 패턴(체이스, 랜덤, 그라디언트 등). 장비 확인 및 문제 해결을 위해 앱에서 직접 테스트 신호를 전송.',
      feat_discovery_title: '네트워크 장비 탐색',
      feat_discovery_desc: '서브넷 스캔 + ARP + 역방향 DNS로 모든 네트워크 장비를 자동 탐색. Art-Net 노드, sACN 게이트웨이에서 네트워크 인프라까지.',
      feat_guardian_title: 'Guardian 시스템',
      feat_guardian_desc: '외부 프로세스가 앱을 상시 모니터링하여 크래시, OOM, kill -9으로부터 자동 복구. 지수 백오프 포함. 라이브 쇼 중 절대 멈추지 않습니다.',
      feat_cluster_title: 'PRIMARY-STANDBY 백업',
      feat_cluster_desc: '이중화 다중 인스턴스 구성. 자동 리더 선출과 헬스 모니터링으로 무중단 장애 조치. 노드 간 권한 이전이 간편. 클러스터 멤버 간 설정 동기화.',
      feat_dual_title: 'Art-Net & sACN 듀얼 프로토콜',
      feat_dual_desc: 'Art-Net 4와 sACN (E1.31) 완벽 지원. 자동 프로토콜 변환 및 브리징. 다중 NIC로 서로 다른 서브넷에서 동시 수신.',
      feat_config_title: '설정 내보내기 및 가져오기',
      feat_config_desc: '포워딩 설정을 파일로 저장하고 불러오기. 현장 간 설정 재사용 및 백업.',
      features_label: 'Features',
      features_title: '\ubbf8\ub2c8\uba40\ud558\uc9c0\ub9cc, \uac15\ub825\ud558\ub2e4',
      features_desc:
        '\ubd88\ud544\uc694\ud55c \uae30\ub2a5 \uc5c6\uc774. DMX \uc2e0\ud638\uc758 \uc218\uc2e0, \uba38\uc9c0, \ubaa8\ub2c8\ud130\ub9c1, \ubcc0\ud658, \uc804\uc1a1\uc744 \uac04\uacb0\ud55c \uc778\ud130\ud398\uc774\uc2a4\ub85c \uc751\ucd95.',
      feat1_title: '\uc2e4\uc2dc\uac04 DMX \uc2dc\uac01\ud654',
      feat1_desc:
        '512\ucc44\ub110\uc744 \uadf8\ub9ac\ub4dc\ub85c \uc2e4\uc2dc\uac04 \ud45c\uc2dc. \uc0c9\uc0c1\ubcc4 \uc778\ud150\uc2dc\ud2f0\ub85c \uc2e0\ud638 \ubcc0\ud654\ub97c \uc989\uc2dc \ud30c\uc545. \uba40\ud2f0 \uc720\ub2c8\ubc84\uc2a4 \ub3d9\uc2dc \ud45c\uc2dc \uc9c0\uc6d0.',
      feat2_title: 'Art-Net & sACN \ub4c0\uc5bc \ud504\ub85c\ud1a0\ucf5c',
      feat2_desc:
        'Art-Net 4\uc640 sACN (E1.31) \ubaa8\ub450 \uc9c0\uc6d0. \ud504\ub85c\ud1a0\ucf5c \uac04 \ubcc0\ud658 \ubc0f \ube0c\ub9bf\uc9c0\ub97c \uc790\ub3d9 \ucc98\ub9ac.',
      feat3_title: '\uc720\ub2c8\ubc84\uc2a4 \uba38\uc9c0 \uc5d4\uc9c4',
      feat3_desc:
        '\ubcf5\uc218 \uc18c\uc2a4\uc758 DMX \uc2e0\ud638\ub97c HTP(\ucd5c\ub300\uac12 \uc6b0\uc120) / LTP(\ucd5c\uc2e0\uac12 \uc6b0\uc120) / Priority\ub85c \uc790\ub3d9 \uba38\uc9c0. DMXking/ENTTEC eDMX\uc640 \ub3d9\ub4f1\ud55c \uba40\ud2f0\uc18c\uc2a4 \ucc98\ub9ac.',
      feat4_title: '\uba40\ud2f0 \ub124\ud2b8\uc6cc\ud06c \uc778\ud130\ud398\uc774\uc2a4',
      feat4_desc:
        '\uc5ec\ub7ec NIC\uc5d0 \ub3d9\uc2dc \ubc14\uc778\ub4dc. \uc11c\ub85c \ub2e4\ub978 \uc11c\ube0c\ub137\uc758 Art-Net/sACN \uc2e0\ud638\ub97c \ud1b5\ud569 \uc218\uc2e0 \ubc0f \uba38\uc9c0. \uc571 \uc7ac\uc2dc\uc791 \uc5c6\uc774 \ud56b \uc2a4\uc704\uce58 \uc9c0\uc6d0.',
      feat5_title: '\ub124\ud2b8\uc6cc\ud06c \ub514\ubc14\uc774\uc2a4 \ud0d0\uc0c9',
      feat5_desc:
        '\uc11c\ube0c\ub137 \uc2a4\uce94 + ARP + \uc5ed\ubc29\ud5a5 DNS\ub85c \ub124\ud2b8\uc6cc\ud06c\uc758 \ubaa8\ub4e0 \ub514\ubc14\uc774\uc2a4\ub97c \uc790\ub3d9 \ubc1c\uacac. \uc870\uba85 \uc7a5\ube44\uc5d0 \ud55c\uc815\ub418\uc9c0 \uc54a\ub294 \ud3ec\uad04\uc801 \ud0d0\uc0c9.',
      feat6_title: '\uc2e0\ud638 \ud50c\ub85c\uc6b0 \uc2dc\uac01\ud654',
      feat6_desc:
        '\uc18c\uc2a4\uc5d0\uc11c \uc720\ub2c8\ubc84\uc2a4\ub97c \uac70\uccd0 \ub370\uc2a4\ud2f0\ub124\uc774\uc158\uc73c\ub85c \ud5a5\ud558\ub294 \uc2e0\ud638 \uacbd\ub85c\ub97c \uc560\ub2c8\uba54\uc774\uc158\uc73c\ub85c \ud45c\uc2dc. \ud750\ub974\ub294 \ud30c\ud2f0\ud074\ub85c \ud1b5\uc2e0 \uc0c1\ud0dc\ub97c \uc9c1\uad00\uc801\uc73c\ub85c \ud655\uc778.',
      feat7_title: '\ud3ec\uc6cc\ub529 & \ub77c\uc6b0\ud305',
      feat7_desc:
        '\ub300\uc0c1\ubcc4\ub85c \uc720\ub2c8\ubc84\uc2a4 \ud544\ud130\ub9c1, \uc624\ud504\uc14b \ub9ac\ub9e4\ud551, \ub51c\ub808\uc774 \uc124\uc815(0\u201310\ucd08)\uc744 \uc720\uc5f0\ud558\uac8c \uad6c\uc131. \uc124\uc815 \uac00\uc838\uc624\uae30/\ub0b4\ubcf4\ub0b4\uae30 \uc9c0\uc6d0.',
      feat8_title: '\uac00\ub514\uc5b8 \uc2dc\uc2a4\ud15c',
      feat8_desc:
        '\uc678\ubd80 \ud504\ub85c\uc138\uc2a4\uac00 \uc571\uc744 \uc0c1\uc2dc \ubaa8\ub2c8\ud130\ub9c1\ud558\uba70, \ud06c\ub798\uc2dc, \uc138\uadf8\ud3f4\ud2b8, OOM, kill -9\ub97c \ud3ec\ud568\ud55c \ubaa8\ub4e0 \ube44\uc815\uc0c1 \uc885\ub8cc\uc5d0\uc11c \uc790\ub3d9 \ubcf5\uad6c. \uc9c0\uc218 \ubc31\uc624\ud504 \uc801\uc6a9. \ub77c\uc774\ube0c \ud604\uc7a5\uc5d0\uc11c \uba48\ucd94\uc9c0 \uc54a\ub294\ub2e4.',
      feat9_title: 'PRIMARY-STANDBY \ubc31\uc5c5',
      feat9_desc:
        '\uc5ec\ub7ec ArtNet Manager \uc778\uc2a4\ud134\uc2a4\ub85c PRIMARY-STANDBY \uc774\uc911\ud654 \uad6c\uc131. \uc790\ub3d9 \ub9ac\ub354 \uc120\ucd9c\uacfc \ud5ec\uc2a4 \ubaa8\ub2c8\ud130\ub9c1\uc73c\ub85c \ub2e4\uc6b4\ud0c0\uc784 \uc81c\ub85c \ud398\uc77c\uc624\ubc84 \uc2e4\ud604.',
      preview_label: 'App Preview',
      preview_title: '\uc778\ud130\ud398\uc774\uc2a4',
      preview_desc:
        '\ud544\uc694\ud55c \uc815\ubcf4\ub9cc, \uac00\uc7a5 \ube60\ub974\uac8c. \ub2e4\ud06c \ud14c\ub9c8\uc758 \uc138\ub828\ub41c UI\ub85c \ud604\uc7a5 \uc5c5\ubb34\uc5d0 \uc9d1\uc911.',
      preview_universe:
        '512\ucc44\ub110 DMX \uac12\uc744 \uc2e4\uc2dc\uac04 \uadf8\ub9ac\ub4dc\ub85c \ud45c\uc2dc. \ud30c\ub791\u2192\uc2dc\uc548\u2192\ud770\uc0c9 \uadf8\ub77c\ub370\uc774\uc158\uc73c\ub85c \uc778\ud150\uc2dc\ud2f0 \uc2dc\uac01\ud654.',
      preview_signal:
        '\uc18c\uc2a4\u2192\uc720\ub2c8\ubc84\uc2a4\u2192\ub370\uc2a4\ud2f0\ub124\uc774\uc158\uc758 \uc2e0\ud638 \uacbd\ub85c\ub97c \uc560\ub2c8\uba54\uc774\uc158\uc73c\ub85c \uc2dc\uac01\ud654. \ud750\ub974\ub294 \ud30c\ud2f0\ud074\ub85c \ub77c\uc774\ube0c \ud1b5\uc2e0\uc744 \ud45c\ud604.',
      preview_delay:
        '\ub300\uc0c1\ubcc4 \ub51c\ub808\uc774 \uc124\uc815(0\u201310\ucd08). \ud0c0\uc774\ubc0d \uc870\uc815\uc774 \ud544\uc694\ud55c \ud604\uc7a5\uc5d0\uc11c\uc758 \uc601\uc0c1 \ub3d9\uae30\ud654 \ubc0f \ubc31\uc5c5 \uc2dc\uc2a4\ud15c \uc9c0\uc5f0 \ucd9c\ub825\uc5d0 \ud65c\uc6a9.',
      preview_device:
        '\ub124\ud2b8\uc6cc\ud06c\uc758 \ubaa8\ub4e0 \ub514\ubc14\uc774\uc2a4\ub97c \uc790\ub3d9 \ubc1c\uacac. Art-Net \ub178\ub4dc, sACN \uac8c\uc774\ud2b8\uc6e8\uc774, \ucef4\ud4e8\ud130, \ub124\ud2b8\uc6cc\ud06c \uc7a5\ube44\ub97c \uce74\ud14c\uace0\ub9ac\ubcc4\ub85c \ubaa9\ub85d \ud45c\uc2dc. \uc2e4\uc2dc\uac04 \uc628\ub77c\uc778/\uc624\ud504\ub77c\uc778 \uc0c1\ud0dc \ubaa8\ub2c8\ud130\ub9c1.',
      download_label: 'Download',
      download_title: '\ub2e4\uc6b4\ub85c\ub4dc',
      download_desc:
        'v2.7.17 \u2014 \uc2e0\ud638 \ub179\ud654/\uc7ac\uc0dd, \ud14c\uc2a4\ud2b8 \uc2e0\ud638 \ub3c4\uad6c, Guardian \ubc0f \ud074\ub7ec\uc2a4\ud130 \uc774\uc911\ud654.',
      dl_win: 'Windows',
      dl_win_version: 'v2.7.17 \u00b7 Installer (.exe)',
      dl_win_portable: 'Windows Portable',
      dl_win_portable_version: 'v2.7.17 \u00b7 Portable (.exe)',
      dl_mac: 'macOS (Apple Silicon)',
      dl_mac_version: 'v2.7.17 \u00b7 DMG (.dmg)',
      mac_adp_notice: '이 앱은 Apple Developer Program 승인 대기 중입니다. 승인될 때까지 커맨드라인 권한 허용이 필요합니다.',
      mac_adp_link: '자세한 내용은 매뉴얼 참조 →',
      dl_btn: '\ub2e4\uc6b4\ub85c\ub4dc',
      disclaimer_p1:
        'ArtNet Manager\ub294 <a href="https://moov-stud.io" target="_blank" rel="noopener">MOOV by Composition Inc.</a> \ud558\uc5d0 <a href="https://github.com/llcheesell" target="_blank" rel="noopener">llcheesell</a>\uc774 \ubc30\ud3ec\ud55c \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc785\ub2c8\ub2e4. \ud504\ub85c\ub355\uc158 \ub808\ub514 \uc18c\ud504\ud2b8\uc6e8\uc5b4\ub97c \ubaa9\ud45c\ub85c \uac1c\ubc1c \uc911\uc774\ub098, \ud604\uc7ac \ud14c\uc2a4\ud2b8 \ub2e8\uacc4\ub85c \ub3d9\uc791\uc774 \uc644\uc804\ud788 \uac80\uc99d\ub418\uc9c0 \uc54a\uc558\uc2b5\ub2c8\ub2e4. \ubcf8 \uc18c\ud504\ud2b8\uc6e8\uc5b4 \uc0ac\uc6a9\uc73c\ub85c \uc778\ud55c \uc5b4\ub5a0\ud55c \uc190\ud574\ub098 \uc0ac\uace0\uc5d0 \ub300\ud574\uc11c\ub3c4 \uac1c\ubc1c\uc790\ub294 \ucc45\uc784\uc744 \uc9c0\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.',
      disclaimer_p2:
        '\ud604\uc7a5\uc5d0 \uadfc\uac70\ud55c \uc2e0\ub8b0\uc131 \ub192\uc740 \ud234\uc744 \ubaa9\ud45c\ub85c \ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4. \uc2e4\uc81c\ub85c \uc0ac\uc6a9\ud574 \ubcf4\uc2dc\uace0 \ubc84\uadf8 \ub9ac\ud3ec\ud2b8\ub098 \uc758\uacac\uc744 \ubcf4\ub0b4\uc8fc\uc138\uc694. \uc5ec\ub7ec\ubd84\uc758 \ud53c\ub4dc\ubc31\uc774 \uc774 \uc571\uc744 \ub354 \uc88b\uac8c \ub9cc\ub4ed\ub2c8\ub2e4.',
      teaser_label: 'Coming Soon',
      teaser_title: 'Next Update',
      teaser_desc: '\ub2e4\uc74c \ubc84\uc804\uc5d0\uc11c \ub354 \uae4a\uc774.',
      teaser_feat1_title: '\uc2e0\ud638 \ub77c\uc6b0\ud305 \uc815\ubc00\ub3c4 \ud5a5\uc0c1',
      teaser_feat1_desc: '\uace0\uc815\ubc00 \ud0c0\uc774\uba38, GC \ud504\ub9ac \uc218\uc2e0 \uacbd\ub85c, 1ms \ud0c0\uc774\uba38 \ud574\uc0c1\ub3c4. \uc9c0\ud130\ub97c \uc81c\uac70\ud558\uc5ec \ud504\ub808\uc784 \ub2e8\uc704\uc758 \uc815\ud655\ud55c \ub77c\uc6b0\ud305\uc744.',
      teaser_feat2_title: '\uc2e0\ud638 \ub179\ud654 \ubc0f \uc7ac\uc0dd \uae30\ub2a5',
      teaser_feat2_desc: 'DMX \uc2e0\ud638\ub97c \uce90\ucc98\ud558\uace0 \uc5b8\uc81c\ub4e0 \uc815\ud655\ud558\uac8c \uc7ac\uc0dd. \ub9ac\ud5c8\uc124, \ub514\ubc84\uae45, \ub77c\uc774\ube0c \uc1fc \ubc31\uc5c5\uc5d0.',
      feedback_label: 'Feedback',
      feedback_title: '피드백을 공유해 주세요',
      feedback_desc: '버그를 신고하거나 기능을 요청하세요. 여러분의 의견이 개발을 이끕니다.',
      feedback_btn: '버그 신고 / 기능 요청',
      feedback_note: '실제 프로덕션 요구에 기반한 신뢰할 수 있는 도구를 만들고 있습니다. 여러분의 피드백이 이 앱을 더 좋게 만듭니다.',
      tech_label: 'Built With',
      tech_title: '\uae30\uc220 \uc2a4\ud0dd',
      tech_desc:
        '\ubaa8\ub358 \uae30\uc220\ub85c \uad6c\ucd95\ub41c \ud504\ub85c\ub355\uc158 \ub808\ub514 \uc560\ud50c\ub9ac\ucf00\uc774\uc158.',
      footer_copy: '\u00a9 2026 MOOV by Composition Inc.',
    },

    zh: {
      nav_features: '\u529f\u80fd',
      nav_preview: '\u9884\u89c8',
      nav_screenshots: '\u622a\u56fe',
      nav_manual: '手册',
      nav_home: '首页',
      nav_download: '\u4e0b\u8f7d',
      screenshots_label: 'Screenshots', screenshots_title: '\u5e94\u7528\u622a\u56fe', screenshots_desc: '\u67e5\u770b\u5b9e\u9645\u5e94\u7528\u7a0b\u5e8f\u754c\u9762\u3002',
      ss_tab_dashboard: '\u4eea\u8868\u76d8', ss_tab_universes: '\u5b87\u5b99\u67e5\u770b\u5668', ss_tab_flow: '\u4fe1\u53f7\u6d41',
      ss_tab_forwarding: '\u8f6c\u53d1', ss_tab_discovery: '\u8bbe\u5907\u53d1\u73b0', ss_tab_dashboard2: '\u4eea\u8868\u76d8\uff0850\u4e2a\u5b87\u5b99\uff09',
      ss_cap_dashboard: '\u5b9e\u65f6\u663e\u793a\u6d3b\u8dc3\u5b87\u5b99\u3001\u5df2\u53d1\u73b0\u8bbe\u5907\u3001\u76ee\u7684\u5730\u548c\u6570\u636e\u5305\u901f\u7387\u7684\u6982\u89c8\u3002',
      hero_subtitle:
        '\u7edf\u4e00\u7ba1\u7406\u3001\u53ef\u89c6\u5316\u548c\u8f6c\u53d1 Art-Net / sACN \u4fe1\u53f7\u3002\u7b80\u7ea6\u800c\u5f3a\u5927\u7684 DMX \u5de5\u5177\uff0c\u4e3a\u73b0\u573a\u5236\u4f5c\u800c\u751f\u3002',
      badge_cross_platform: 'Cross-Platform',
      badge_minimal: 'Minimal & Powerful',
      hero_download_btn: 'Download v2.7.17',
      pillar1_label: 'Signal Management',
      pillar1_title: '信号集成与传输',
      pillar1_desc: '接收 Art-Net / sACN 信号并以 HTP、LTP 或 Priority 合并。按 Universe 过滤、偏移重映射、延迟设置，并同时转发到多个目标。多 NIC 支持跨子网统一管理。',
      pillar2_label: 'Record & Playback',
      pillar2_title: '信号录制与回放',
      pillar2_desc: '实时录制 DMX 信号。Delta 压缩的 ANMR 格式使长时间捕获保持紧凑。在 Player 模式中随时回放——用于彩排记录、现场备份输出或调试。',
      pillar3_label: 'Visualization',
      pillar3_title: '信号流可视化',
      pillar3_desc: '512 通道网格显示、从源端经由 Universe 到目标端的动画信号路径图，以及实时仪表板统计。一目了然地了解信号流向。',
      feat_checker_title: '测试信号工具',
      feat_checker_desc: '12 种内置测试模式（追逐、随机、渐变等）。直接从应用发送测试信号进行设备验证和故障排查。',
      feat_discovery_title: '网络设备发现',
      feat_discovery_desc: '子网扫描 + ARP + 反向 DNS 自动发现所有网络设备。从 Art-Net 节点和 sACN 网关到网络基础设施。',
      feat_guardian_title: 'Guardian 系统',
      feat_guardian_desc: '外部进程持续监控应用，在崩溃、OOM 和 kill -9 后自动恢复。包含指数退避。现场演出永不停止。',
      feat_cluster_title: 'PRIMARY-STANDBY 备份',
      feat_cluster_desc: '冗余多实例配置。自动 Leader 选举和健康监控实现零停机故障转移。节点间权限转移简单。集群成员间配置同步。',
      feat_dual_title: 'Art-Net & sACN 双协议',
      feat_dual_desc: '完全支持 Art-Net 4 和 sACN (E1.31)。自动协议转换和桥接。多 NIC 从不同子网同时接收。',
      feat_config_title: '配置导出与导入',
      feat_config_desc: '将转发配置保存为文件并加载。跨场地复用设置并创建备份。',
      features_label: 'Features',
      features_title: '\u7b80\u7ea6\uff0c\u4f46\u5f3a\u5927',
      features_desc:
        '\u6ca1\u6709\u591a\u4f59\u529f\u80fd\u3002DMX \u4fe1\u53f7\u7684\u63a5\u6536\u3001\u5408\u5e76\u3001\u76d1\u63a7\u3001\u8f6c\u6362\u548c\u8f6c\u53d1\uff0c\u5c3d\u5728\u4e00\u4e2a\u7b80\u6d01\u7684\u754c\u9762\u4e2d\u3002',
      feat1_title: '\u5b9e\u65f6 DMX \u53ef\u89c6\u5316',
      feat1_desc:
        '\u4ee5\u7f51\u683c\u5f62\u5f0f\u5b9e\u65f6\u663e\u793a 512 \u4e2a\u901a\u9053\u3002\u901a\u8fc7\u989c\u8272\u7f16\u7801\u7684\u4eae\u5ea6\u503c\uff0c\u5373\u65f6\u6355\u6349\u4fe1\u53f7\u53d8\u5316\u3002\u652f\u6301\u591a Universe \u540c\u65f6\u663e\u793a\u3002',
      feat2_title: 'Art-Net & sACN \u53cc\u534f\u8bae',
      feat2_desc:
        '\u5b8c\u6574\u652f\u6301 Art-Net 4 \u548c sACN (E1.31)\u3002\u534f\u8bae\u95f4\u7684\u8f6c\u6362\u4e0e\u6865\u63a5\u81ea\u52a8\u5904\u7406\u3002',
      feat3_title: 'Universe \u5408\u5e76\u5f15\u64ce',
      feat3_desc:
        '\u81ea\u52a8\u5408\u5e76\u591a\u4e2a\u6e90\u7684 DMX \u4fe1\u53f7\uff0c\u652f\u6301 HTP\uff08\u6700\u9ad8\u503c\u4f18\u5148\uff09/ LTP\uff08\u6700\u65b0\u503c\u4f18\u5148\uff09/ Priority\u3002\u591a\u6e90\u5904\u7406\u80fd\u529b\u5ab2\u7f8e DMXking/ENTTEC eDMX\u3002',
      feat4_title: '\u591a\u7f51\u7edc\u63a5\u53e3',
      feat4_desc:
        '\u540c\u65f6\u7ed1\u5b9a\u591a\u4e2a NIC\u3002\u96c6\u4e2d\u63a5\u6536\u548c\u5408\u5e76\u6765\u81ea\u4e0d\u540c\u5b50\u7f51\u7684 Art-Net/sACN \u4fe1\u53f7\u3002\u652f\u6301\u70ed\u5207\u6362\uff0c\u65e0\u9700\u91cd\u542f\u5e94\u7528\u3002',
      feat5_title: '\u7f51\u7edc\u8bbe\u5907\u53d1\u73b0',
      feat5_desc:
        '\u901a\u8fc7\u5b50\u7f51\u626b\u63cf + ARP + \u53cd\u5411 DNS \u81ea\u52a8\u53d1\u73b0\u7f51\u7edc\u4e0a\u7684\u6240\u6709\u8bbe\u5907\u3002\u4e0d\u4ec5\u9650\u4e8e\u706f\u5149\u8bbe\u5907\uff0c\u5168\u9762\u68c0\u6d4b\u3002',
      feat6_title: '\u4fe1\u53f7\u6d41\u53ef\u89c6\u5316',
      feat6_desc:
        '\u4ee5\u52a8\u753b\u5f62\u5f0f\u5c55\u793a\u4ece\u6e90\u7aef\u7ecf\u7531 Universe \u5230\u76ee\u6807\u7aef\u7684\u4fe1\u53f7\u8def\u5f84\u3002\u6d41\u52a8\u7c92\u5b50\u76f4\u89c2\u5448\u73b0\u901a\u4fe1\u72b6\u6001\u3002',
      feat7_title: '\u8f6c\u53d1\u4e0e\u8def\u7531',
      feat7_desc:
        '\u6309\u76ee\u6807\u914d\u7f6e Universe \u8fc7\u6ee4\u3001\u504f\u79fb\u91cd\u6620\u5c04\u548c\u5ef6\u8fdf\uff080\u201310 \u79d2\uff09\u3002\u652f\u6301\u914d\u7f6e\u7684\u5bfc\u5165/\u5bfc\u51fa\u3002',
      feat8_title: 'Guardian \u7cfb\u7edf',
      feat8_desc:
        '\u5916\u90e8\u8fdb\u7a0b\u6301\u7eed\u76d1\u63a7\u5e94\u7528\uff0c\u5728\u5d29\u6e83\u3001\u6bb5\u9519\u8bef\u3001OOM\u3001kill -9 \u7b49\u4efb\u4f55\u5f02\u5e38\u7ec8\u6b62\u540e\u81ea\u52a8\u6062\u590d\u3002\u914d\u5907\u6307\u6570\u9000\u907f\u7b56\u7565\u3002\u73b0\u573a\u6f14\u51fa\u6c38\u4e0d\u505c\u6b62\u3002',
      feat9_title: 'PRIMARY-STANDBY \u5907\u4efd',
      feat9_desc:
        '\u591a\u4e2a ArtNet Manager \u5b9e\u4f8b\u7ec4\u6210 PRIMARY-STANDBY \u5197\u4f59\u914d\u7f6e\u3002\u81ea\u52a8 Leader \u9009\u4e3e\u548c\u5065\u5eb7\u76d1\u63a7\uff0c\u5b9e\u73b0\u96f6\u505c\u673a\u6545\u969c\u8f6c\u79fb\u3002',
      preview_label: 'App Preview',
      preview_title: '\u754c\u9762',
      preview_desc:
        '\u53ea\u5c55\u793a\u5fc5\u8981\u4fe1\u606f\uff0c\u4ee5\u6700\u5feb\u901f\u5ea6\u3002\u7cbe\u81f4\u7684\u6df1\u8272\u4e3b\u9898 UI\uff0c\u8ba9\u60a8\u4e13\u6ce8\u4e8e\u73b0\u573a\u5de5\u4f5c\u3002',
      preview_universe:
        '\u5b9e\u65f6\u7f51\u683c\u663e\u793a 512 \u4e2a DMX \u901a\u9053\u503c\u3002\u84dd\u2192\u9752\u2192\u767d\u6e10\u53d8\u76f4\u89c2\u5448\u73b0\u4eae\u5ea6\u3002',
      preview_signal:
        '\u4ee5\u52a8\u753b\u5f62\u5f0f\u53ef\u89c6\u5316\u6e90\u2192Universe\u2192\u76ee\u6807\u7684\u4fe1\u53f7\u8def\u5f84\u3002\u6d41\u52a8\u7c92\u5b50\u8868\u73b0\u5b9e\u65f6\u901a\u4fe1\u3002',
      preview_delay:
        '\u6309\u76ee\u6807\u8bbe\u7f6e\u5ef6\u8fdf\uff080\u201310 \u79d2\uff09\u3002\u9002\u7528\u4e8e\u9700\u8981\u65f6\u95f4\u8c03\u6574\u7684\u73b0\u573a\u89c6\u9891\u540c\u6b65\u548c\u5907\u4efd\u7cfb\u7edf\u5ef6\u8fdf\u8f93\u51fa\u3002',
      preview_device:
        '\u81ea\u52a8\u53d1\u73b0\u7f51\u7edc\u4e0a\u7684\u6240\u6709\u8bbe\u5907\u3002Art-Net \u8282\u70b9\u3001sACN \u7f51\u5173\u3001\u8ba1\u7b97\u673a\u548c\u7f51\u7edc\u8bbe\u5907\u5206\u7c7b\u5217\u8868\u663e\u793a\u3002\u5b9e\u65f6\u76d1\u63a7\u5728\u7ebf/\u79bb\u7ebf\u72b6\u6001\u3002',
      download_label: 'Download',
      download_title: '\u4e0b\u8f7d',
      download_desc:
        'v2.7.17 \u2014 \u4fe1\u53f7\u5f55\u5236/\u56de\u653e\u3001\u6d4b\u8bd5\u4fe1\u53f7\u5de5\u5177\u3001Guardian \u548c\u96c6\u7fa4\u5197\u4f59\u3002',
      dl_win: 'Windows',
      dl_win_version: 'v2.7.17 \u00b7 Installer (.exe)',
      dl_win_portable: 'Windows Portable',
      dl_win_portable_version: 'v2.7.17 \u00b7 Portable (.exe)',
      dl_mac: 'macOS (Apple Silicon)',
      dl_mac_version: 'v2.7.17 \u00b7 DMG (.dmg)',
      mac_adp_notice: '此应用正在等待 Apple Developer Program 审批。在此之前，需要通过命令行授权才能打开。',
      mac_adp_link: '详见手册 →',
      dl_btn: '\u4e0b\u8f7d',
      disclaimer_p1:
        'ArtNet Manager \u662f\u7531 <a href="https://github.com/llcheesell" target="_blank" rel="noopener">llcheesell</a> \u5728 <a href="https://moov-stud.io" target="_blank" rel="noopener">MOOV by Composition Inc.</a> \u65d7\u4e0b\u53d1\u5e03\u7684\u5e94\u7528\u7a0b\u5e8f\u3002\u6211\u4eec\u6b63\u5728\u671d\u7740\u751f\u4ea7\u5c31\u7eea\u7684\u8f6f\u4ef6\u52aa\u529b\uff0c\u4f46\u76ee\u524d\u5904\u4e8e\u6d4b\u8bd5\u9636\u6bb5\uff0c\u5c1a\u672a\u5b8c\u6210\u5168\u9762\u9a8c\u8bc1\u3002\u5f00\u53d1\u8005\u4e0d\u5bf9\u56e0\u4f7f\u7528\u672c\u8f6f\u4ef6\u800c\u5f15\u8d77\u7684\u4efb\u4f55\u635f\u5bb3\u6216\u4e8b\u6545\u627f\u62c5\u8d23\u4efb\u3002',
      disclaimer_p2:
        '\u6211\u4eec\u81f4\u529b\u4e8e\u6253\u9020\u4e00\u6b3e\u690d\u6839\u4e8e\u73b0\u573a\u5b9e\u9645\u9700\u6c42\u7684\u53ef\u9760\u5de5\u5177\u3002\u8bf7\u5c1d\u8bd5\u4f7f\u7528\u5e76\u5206\u4eab\u60a8\u7684 Bug \u62a5\u544a\u548c\u53cd\u9988\u3002\u60a8\u7684\u53cd\u9988\u8ba9\u8fd9\u6b3e\u5e94\u7528\u66f4\u597d\u3002',
      teaser_label: 'Coming Soon',
      teaser_title: 'Next Update',
      teaser_desc: '\u4e0b\u4e00\u7248\u672c\uff0c\u66f4\u8fdb\u4e00\u6b65\u3002',
      teaser_feat1_title: '\u4fe1\u53f7\u8def\u7531\u7cbe\u5ea6\u63d0\u5347',
      teaser_feat1_desc: '\u9ad8\u7cbe\u5ea6\u5b9a\u65f6\u5668\u3001\u65e0GC\u63a5\u6536\u8def\u5f84\u30011ms\u5b9a\u65f6\u5668\u5206\u8fa8\u7387\u3002\u6d88\u9664\u62a5\u6587\u6296\u52a8\uff0c\u5b9e\u73b0\u5e27\u7ea7\u7cbe\u786e\u8def\u7531\u3002',
      teaser_feat2_title: '\u4fe1\u53f7\u5f55\u5236\u4e0e\u56de\u653e',
      teaser_feat2_desc: '\u6355\u83b7 DMX \u4fe1\u53f7\u5e76\u7cbe\u786e\u56de\u653e\u3002\u7528\u4e8e\u5f69\u6392\u3001\u8c03\u8bd5\u548c\u73b0\u573a\u6f14\u51fa\u5907\u4efd\u3002',
      feedback_label: 'Feedback',
      feedback_title: '分享您的反馈',
      feedback_desc: '报告 Bug 或请求功能。您的意见引导开发方向。',
      feedback_btn: 'Bug 报告 / 功能请求',
      feedback_note: '我们致力于打造一款植根于实际生产需求的可靠工具。您的反馈让这款应用更好。',
      tech_label: 'Built With',
      tech_title: '\u6280\u672f\u6808',
      tech_desc:
        '\u91c7\u7528\u73b0\u4ee3\u6280\u672f\u6784\u5efa\u7684\u751f\u4ea7\u5c31\u7eea\u5e94\u7528\u3002',
      footer_copy: '\u00a9 2026 MOOV by Composition Inc.',
    },
  };

  /* ── Language labels for the switcher ── */
  var langLabels = {
    ja: '\u65e5\u672c\u8a9e',
    en: 'English',
    de: 'Deutsch',
    fr: 'Fran\u00e7ais',
    es: 'Espa\u00f1ol',
    it: 'Italiano',
    nl: 'Nederlands',
    pt: 'Portugu\u00eas',
    ko: '\ud55c\uad6d\uc5b4',
    zh: '\u4e2d\u6587',
  };

  var supportedLangs = Object.keys(translations);
  var STORAGE_KEY = 'artnetmanager-lang';

  /* ── Detect language ── */
  function detectLang() {
    // 1. localStorage preference
    var stored = localStorage.getItem(STORAGE_KEY);
    if (stored && translations[stored]) return stored;

    // 2. Browser language
    var nav = (navigator.language || navigator.userLanguage || '').toLowerCase();

    // Exact match first (e.g. "ja", "en")
    var base = nav.split('-')[0];
    if (translations[base]) return base;

    // Full tag match attempt (e.g. "pt-BR" -> "pt")
    for (var i = 0; i < supportedLangs.length; i++) {
      if (nav.startsWith(supportedLangs[i])) return supportedLangs[i];
    }

    // 3. Fallback
    return 'en';
  }

  var currentLang = detectLang();

  /* ── Apply translations to DOM ── */
  function applyTranslations(lang) {
    var dict = translations[lang];
    if (!dict) return;

    // data-i18n -> textContent
    var els = document.querySelectorAll('[data-i18n]');
    for (var i = 0; i < els.length; i++) {
      var key = els[i].getAttribute('data-i18n');
      if (dict[key] !== undefined) {
        els[i].textContent = dict[key];
      }
    }

    // data-i18n-html -> innerHTML
    var htmlEls = document.querySelectorAll('[data-i18n-html]');
    for (var j = 0; j < htmlEls.length; j++) {
      var hkey = htmlEls[j].getAttribute('data-i18n-html');
      if (dict[hkey] !== undefined) {
        htmlEls[j].innerHTML = dict[hkey];
      }
    }

    // Update html lang attribute
    document.documentElement.lang = lang;
  }

  /* ── Public API ── */
  function setLang(lang) {
    if (!translations[lang]) return;
    currentLang = lang;
    localStorage.setItem(STORAGE_KEY, lang);
    applyTranslations(lang);
    updateSwitcherLabel(lang);
  }

  function getLang() {
    return currentLang;
  }

  /* ── Floating language switcher UI ── */
  function createSwitcher() {
    // Wrapper
    var wrapper = document.createElement('div');
    wrapper.id = 'i18n-switcher';
    wrapper.style.cssText =
      'position:fixed;bottom:24px;right:24px;z-index:9999;font-family:inherit;';

    // Toggle button
    var toggle = document.createElement('button');
    toggle.id = 'i18n-toggle';
    toggle.setAttribute('aria-label', 'Change language');
    toggle.style.cssText = [
      'display:flex;align-items:center;gap:6px;',
      'padding:8px 14px;border:1px solid var(--border, #2a2a3a);',
      'border-radius:10px;cursor:pointer;',
      'background:var(--card, #16162a);color:var(--text, #e0e0e0);',
      'font-size:13px;font-weight:500;',
      'box-shadow:0 4px 20px rgba(0,0,0,0.4);',
      'transition:all 0.2s ease;',
      'backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);',
    ].join('');

    // Globe SVG
    var globe =
      '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink:0"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>';

    var labelSpan = document.createElement('span');
    labelSpan.id = 'i18n-label';
    labelSpan.textContent = langLabels[currentLang] || currentLang.toUpperCase();

    toggle.innerHTML = globe;
    toggle.appendChild(labelSpan);

    // Dropdown menu
    var menu = document.createElement('div');
    menu.id = 'i18n-menu';
    menu.style.cssText = [
      'position:absolute;bottom:calc(100% + 8px);right:0;',
      'min-width:160px;padding:6px;',
      'background:var(--card, #16162a);',
      'border:1px solid var(--border, #2a2a3a);',
      'border-radius:12px;',
      'box-shadow:0 8px 32px rgba(0,0,0,0.5);',
      'opacity:0;visibility:hidden;transform:translateY(8px) scale(0.96);',
      'transition:all 0.2s cubic-bezier(0.16,1,0.3,1);',
      'backdrop-filter:blur(16px);-webkit-backdrop-filter:blur(16px);',
      'max-height:360px;overflow-y:auto;',
    ].join('');

    // Menu items
    for (var k = 0; k < supportedLangs.length; k++) {
      var code = supportedLangs[k];
      var item = document.createElement('button');
      item.setAttribute('data-lang', code);
      item.textContent = langLabels[code];
      item.style.cssText = [
        'display:block;width:100%;text-align:left;',
        'padding:8px 12px;border:none;border-radius:8px;',
        'background:transparent;color:var(--text-muted, #8888aa);',
        'font-size:13px;cursor:pointer;',
        'transition:all 0.15s ease;',
      ].join('');

      if (code === currentLang) {
        item.style.color = 'var(--cyan, #22d3ee)';
        item.style.background = 'rgba(34,211,238,0.08)';
      }

      item.addEventListener('mouseenter', function () {
        if (this.getAttribute('data-lang') !== currentLang) {
          this.style.background = 'rgba(255,255,255,0.05)';
          this.style.color = 'var(--text, #e0e0e0)';
        }
      });
      item.addEventListener('mouseleave', function () {
        if (this.getAttribute('data-lang') !== currentLang) {
          this.style.background = 'transparent';
          this.style.color = 'var(--text-muted, #8888aa)';
        }
      });
      item.addEventListener('click', function () {
        var lang = this.getAttribute('data-lang');
        setLang(lang);
        closeMenu();
        // Update active state
        var items = menu.querySelectorAll('button');
        for (var m = 0; m < items.length; m++) {
          if (items[m].getAttribute('data-lang') === lang) {
            items[m].style.color = 'var(--cyan, #22d3ee)';
            items[m].style.background = 'rgba(34,211,238,0.08)';
          } else {
            items[m].style.color = 'var(--text-muted, #8888aa)';
            items[m].style.background = 'transparent';
          }
        }
      });

      menu.appendChild(item);
    }

    var isOpen = false;

    function openMenu() {
      isOpen = true;
      menu.style.opacity = '1';
      menu.style.visibility = 'visible';
      menu.style.transform = 'translateY(0) scale(1)';
      toggle.style.borderColor = 'var(--cyan, #22d3ee)';
    }

    function closeMenu() {
      isOpen = false;
      menu.style.opacity = '0';
      menu.style.visibility = 'hidden';
      menu.style.transform = 'translateY(8px) scale(0.96)';
      toggle.style.borderColor = 'var(--border, #2a2a3a)';
    }

    toggle.addEventListener('click', function (e) {
      e.stopPropagation();
      if (isOpen) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    // Close on click outside
    document.addEventListener('click', function (e) {
      if (isOpen && !wrapper.contains(e.target)) {
        closeMenu();
      }
    });

    // Hover effect on toggle
    toggle.addEventListener('mouseenter', function () {
      if (!isOpen) {
        toggle.style.borderColor = 'var(--text-muted, #8888aa)';
      }
    });
    toggle.addEventListener('mouseleave', function () {
      if (!isOpen) {
        toggle.style.borderColor = 'var(--border, #2a2a3a)';
      }
    });

    wrapper.appendChild(menu);
    wrapper.appendChild(toggle);
    document.body.appendChild(wrapper);
  }

  function updateSwitcherLabel(lang) {
    var label = document.getElementById('i18n-label');
    if (label) {
      label.textContent = langLabels[lang] || lang.toUpperCase();
    }
  }

  /* ── Initialize ── */
  function init() {
    applyTranslations(currentLang);
    createSwitcher();
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  /* ── Export global i18n object ── */
  window.i18n = {
    setLang: setLang,
    getLang: getLang,
  };
})();
