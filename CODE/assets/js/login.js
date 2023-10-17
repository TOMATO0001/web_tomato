$(function() {
    $('#box_regist').on('click',function() {
        $('.big_regist').hide()
        $('.big_log').show()
    } )

    $('#box_log').on('click',function() {
        $('.big_regist').show()
        $('.big_log').hide()
    } )
})

 var form = layui.form

 form.verify ({
    pass: [/^[\S]{6,12}$/,'密码必须6到12位，且不能出现空格'] ,

    repat:function(value) {
        var pass = $('.big_log [name=password]').val()

        if(pass !== value) {
            return '两次输入的数据不一样'
        }
    }
 })

