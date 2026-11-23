# CLAUDE.md

## コミット前のチェック

- commit の前に型チェック（`tsc --noEmit` など）と Lint（Biome など）を実行し、通ってから commit する。
- 型エラーが残った状態で commit して後から直す流れは避ける。PR を作る前にも同じチェックを通す。
