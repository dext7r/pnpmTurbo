import clone from './clone.js'

export default async (path) => {
    return await clone(
        'https://github.com/h7ml/vue-amis-admin.git',
        path || 'vue-amis-admin',
    )
}
