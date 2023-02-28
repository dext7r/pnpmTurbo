import clone from './clone.js'

export default async (path) => {
    return await clone(
        'https://github.com/h7ml/amis-admin-vue.git',
        path || 'vue-amis-admin',
    )
}
