// types.ts

export interface User {
    image: string;
    name: string;
    username: string;
  }
  
  export interface Comment {
    id: number;
    content: string;
    user: User;
    replies?: Comment[];
  }
  
  export interface ProductRequest {
    id: number;
    title: string;
    category: string;
    upvotes: number;
    status: string;
    description: string;
    comments?: Comment[];
  }
  