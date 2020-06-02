import extend from '../utils/context.js';
import models from '../models/index.js';
import docModifier from '../utils/doc-modified.js';

export default {
    post: {
        createPost(context) {
            const data = { ...context.params, uid: localStorage.getItem('userId') };

            models.post.create(data).then((resonse) => {
                console.log(resonse);
                context.redirect('#/home')
            }).catch((e) => console.error(e));
        }
    }

};