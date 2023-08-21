export interface Blog {
    id: number;
    title: string;
    background: string;
    category: string;
    serviceItem: string;
    link: string;
    content: {
        headInfo: {
            title: string;
            description: string;
            author: {
                avatar: string;
                name: string;
                position: string;
            };
            timeToRead: string;
            creationDate: string;
        };
        description: string;
        mainInfo: Array<{
            id: number;
            heading: string;
            content: string;
        }>;
    };
}
  