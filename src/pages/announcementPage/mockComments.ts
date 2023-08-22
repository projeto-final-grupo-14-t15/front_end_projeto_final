export const commentsData = [
    {
        userName: 'Júlia Lima',
        createdAt: '01/01/2023',
        commentText: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
        userName: 'Marcos Antônio',
        createdAt: '01/01/2023',
        commentText: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
        userName: 'Camila Silva',
        createdAt: '01/01/2023',
        commentText: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    }
];

export interface ICommentDataType {
    userName:string;
    createdAt:string;
    commentText:string;
}

