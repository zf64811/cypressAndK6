# Dockerfile
FROM cypress/browsers:node-22.14.0-chrome-133.0.6943.126-1-ff-135.0.1-edge-133.0.3065.82-1

# 创建非 root 用户（安全最佳实践）:contentReference[oaicite:13]{index=13}
RUN addgroup --system cypress && adduser --system --ingroup cypress cypress

USER cypress
WORKDIR /e2e

# 先复制 package 相关文件以利用缓存
COPY package.json package-lock.json ./
RUN npm ci && npx cypress install

# 再复制测试代码
COPY cypress/ ./cypress/
COPY cypress.config.js ./
RUN npx cypress verify

# 默认执行测试命令
CMD ["npx", "cypress", "run"]
