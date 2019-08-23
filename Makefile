.PHONY: init dev build

# 项目的初始化
init:
	yarn

# 开发模式
dev: init
	yarn run docs:dev

# 打包发布
build: clean
	yarn run docs:build

clean:
	rm -rf .vuepress/dist