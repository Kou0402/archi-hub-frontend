## parts ディレクトリ

- 部品となるコンポーネントを配置する
- グローバルステートは持たない（ローカルステートは使用可）
- 他のコンポーネントに依存しない
- 再利用性が十分に考慮される

## features ディレクトリ

- 複数の部品から構成されるコンポーネントを配置する
- グローバルステートは持たない（ローカルステートは使用可）
- 他の parts, features コンポーネントに依存できる
- 必ずしも再利用性を考慮する必要はない（再利用できるものは再利用してよい）
