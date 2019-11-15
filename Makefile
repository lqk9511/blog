.PHONY: init dev build

# 项目的初始化
init:
	yarn

# 开发模式
dev: init
	yarn run docs:dev

# 提交commit message
commit:
	yarn commit
	
# 打包发布
build: clean
	yarn run docs:build
	# 开始推送gh-pages
	$(info $(开始推送gh-pages))
	bash deploy.sh
	$(info $(清除dist文件))
	# 清除dist文件
	make clean
clean:
	rm -rf docs/.vuepress/dist