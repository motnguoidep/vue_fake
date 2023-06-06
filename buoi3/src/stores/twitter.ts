import { defineStore } from 'pinia'
import axios from "axios";
export const twitterStore = defineStore('twitterStore', {
    state: () => ({
        posts: [],
    }),
        actions: {
        // since we rely on `this`, we cannot use an arrow function
            fetchData() {
                return axios
                    .get("https://647745fd9233e82dd53b51c2.mockapi.io/api/v1/posts")
                    .then((response : any) => {
                        this.posts = response.data.reverse();
                    })
                    .catch((error: any) => console.log(error));
            },

            async create(post: any){
                 await axios
                    .post("https://647745fd9233e82dd53b51c2.mockapi.io/api/v1/posts", post)
                    .then((response) => response)
                    .catch(function (error) {
                        console.log(error);
                    });
            },
            async update(post: any){
                await axios
                    //đay len gia tri nao trong bảng
                    .put(
                        `https://647745fd9233e82dd53b51c2.mockapi.io/api/v1/posts/${post.id}`,post
                    )
                    .catch(function (error) {
                        console.log(error);
                    });
            },
            async delete(id: number){
                await axios
                    .delete(
                        `https://647745fd9233e82dd53b51c2.mockapi.io/api/v1/posts/${id}`,
                    )
                    .catch(function (error) {
                        console.log(error);
                    });
            }

    },
})
