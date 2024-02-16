\c jpfood;
-- テーブル作成
DROP TABLE IF EXISTS food;
CREATE TABLE food (
	id integer NOT NULL PRIMARY KEY,
	foodname char(200) NOT NULL,
    rate integer,
    pathname char(255),
	created_date_time timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
);
-- ID用シーケンス作成
CREATE SEQUENCE sample_id_seq START 1;
-- サンブルデータの登録
INSERT INTO food (id, foodname, rate, pathname) VALUES(nextval('sample_id_seq'), 'sample name', 80, 'samplepath');
