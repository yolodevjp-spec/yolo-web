# Vercel で YOUTUBE_API_KEY を設定する手順

1. [Vercel Dashboard](https://vercel.com/dashboard) にログインする。
2. 対象プロジェクト（yolo-web-two など）をクリックして開く。
3. 上部メニューで **Settings** をクリック。
4. 左サイドバーで **Environment Variables** をクリック。
5. **Key** に `YOUTUBE_API_KEY` と入力する。
6. **Value** に、Google Cloud Console で発行した YouTube Data API v3 の API キーを貼り付ける。
7. **Environment** で **Production**（と必要なら Preview / Development）にチェックを入れる。
8. **Save** をクリック。
9. **Redeploy** を実行する（Deployments → 最新のデプロイの ⋮ → Redeploy）。環境変数を反映するには再デプロイが必要。

## API キーを取得する場合（Google Cloud Console）

1. [Google Cloud Console](https://console.cloud.google.com/) でプロジェクトを選択または作成。
2. **API とサービス** → **ライブラリ** で「YouTube Data API v3」を検索し **有効化**。
3. **API とサービス** → **認証情報** → **認証情報を作成** → **API キー** でキーを作成し、コピーして上記 Value に設定する。
