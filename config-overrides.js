const { alias } = require('react-app-rewire-alias')

module.exports = function override(config) {
    alias({
        '@components': 'src/components',
        '@class-components': 'src/components/classComponents',
        '@constants': 'src/constants',
        '@containers': 'src/containers',
        '@screens': 'src/screens',
        '@styles': 'src/styles',
        '@utils': 'src/utils',
    })(config)

    return config
}
