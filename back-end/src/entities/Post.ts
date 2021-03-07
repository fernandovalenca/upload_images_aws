export class Post {
    public name: string;
    public size: number;
    public key: string;
    public url: string;

    constructor(props: Post) {
        Object.assign(this, props);
    }
};