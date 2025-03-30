# Blog-Website
 A simple Express.js-based Blog API that allows users to create, read, update, and delete (CRUD) blog posts. It uses an in-memory data store to manage blog posts dynamically.



#  Features
- ➢ GET all blog posts  
- ➢ GET a specific blog post by ID  
- ➢ POST a new blog post  
- ➢ PATCH an existing blog post (update specific fields)  
- ➢ DELETE a blog post  

---

##  Technologies Used
- **Node.js**  
- **Express.js**  
- **Body-parser**  

---

##  Installation

### 1. Clone this repository:
```bash
git clone https://github.com/your-username/blog-api.git
cd blog-api


```
### 2️. Install dependencies:
```bash
npm install
```


### 3️. Start the server:
```bash
node index.js
```

### Server runs at http://localhost:4000 

## API Endpoints
| Method | Endpoint | Description |
| --- | --- | --- |
| GET | `/posts` | Fetch all blog posts |
| GET | `/posts/:id` | Fetch a specific post by ID |
| POST | `/posts` | Create a new blog post |
| PATCH | `/posts/:id` | Update a post's title, content, or author |
| DELETE | `/posts/:id` | Remove a post |

### Example Blog Post JSON
```bash
{
  "title": "New Innovations in AI",
  "content": "Artificial Intelligence is evolving rapidly...",
  "author": "ABC"
}
```



