# 用户接口

## POST /api/user/login

- **说明**：用户登录
- **请求参数**
| 字段 | 类型 | 必填 | 说明 |
|------|------|------|------|
| username | string | ✅ | 用户名 |
| password | string | ✅ | 密码 |

- **响应示例**
```json
{
  "code": 0,
  "data": { "token": "xxxx" },
  "message": "登录成功"
}



---

## 六、增强功能建议（提高可维护性）

| 功能 | 插件 / 方法 | 说明 |
|------|--------------|------|
| **全文搜索** | 默认 Local Search / Algolia DocSearch | 支持快速检索 |
| **代码示例高亮** | `vitepress-plugin-shiki` | 语法高亮 |
| **接口表格组件** | 自定义 `<ApiTable />` | 统一接口格式 |
| **自动生成 changelog** | Git commit + script | 版本自动记录 |
| **Dark Mode** | 内置支持 | 用户切换主题 |
| **多语言支持** | VitePress locales | 支持中/英文版本 |

---

## 七、写作规范（团队约定）

| 分类 | 要求 |
|------|------|
| 文件命名 | 全小写、使用中划线，如 `deploy-guide.md` |
| 图片资源 | 放在 `/public/assets/` 下，引用时使用相对路径 |
| 标题层级 | 一级标题仅用于文档名 |
| 表格统一格式 | `| 字段 | 类型 | 说明 |` |
| 每个文档结尾 | 添加“更新时间”或“编辑人”字段 |

---

是否希望我帮你直接 **生成一个可运行的 VitePress 初始化模板（含 config + sidebar + 示例文档）**？  
👉 这样你可以直接 `npm run docs:dev` 预览成品结构。
