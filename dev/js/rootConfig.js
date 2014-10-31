seajs.config({
    alias: {
		'jquery': 'lib/jquery',
		'app': 'src/app/app',
		'requires': 'src/requires/requires',
		'include': 'src/include/include',
		'plugins': 'src/plugins/plugins'
	},
    charset: 'utf-8',
    'map': [
        [ /^(.*\.(?:css|js))(.*)$/i, '$1?v=0.1.0' ]
    ]
});