tktlab-website
================

高知工科大学高田研究室の新ウェブサイトです。


* 制作方針: [issue #1](https://github.com/kut-tktlab/tktlab-website/issues/1)

開発
----

ウェブサイトの動作や開発に必要な依存パッケージをインストールします。

```
$ npm install
```

ページやスタイルシート等のファイルを [gulp](http://gulpjs.com/) で `default` タスクでビルドします。
`default` タスクでは、ビルドと同時にwatchしており、`src/`  以下のファイルに変更があると自動でビルドします。

また、[gulp-webserver](https://www.npmjs.com/package/gulp-webserver) を用いて  [localhost:8000](http://localhost:8000/) から `public/` 以下にビルドされるウェブページが確認できるようになります。

```
$ gulp
```

Let's enjoy coding!
