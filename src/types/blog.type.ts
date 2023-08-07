export interface Blog {
    id: number;
    title: string;
    background: string;
    category: string;
    serviceItem: string;
    content: {
        headInfo: {
            title: string;
            description: string;
            autor: {
                avatar: string;
                name: string;
                position: string;
            };
            timeToRead: string;
            creationDate: string;
        };
        description: string;
        mainInfo: Array<{
            heading: string;
            content: string;
        }>;
    };
}
  