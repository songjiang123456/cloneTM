//require.config({  })   配置模块

require.config({
    baseUrl:'https://cdnjs.cloudflare.com/ajax/libs/',//公共路径
    paths:{
        'jquery':'jquery/3.4.0/jquery.min', //引入jquey
        'jqcookie':'jquery-cookie/1.4.1/jquery.cookie.min',
        'lazyload':'jquery.lazyload/1.9.1/jquery.lazyload.min',
        'validate':'jquery-validate/1.19.0/jquery.validate.min'
    },
    shim:{//依赖
    }
});