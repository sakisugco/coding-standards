(function($) {

  $(function() {

    $.validator.addMethod("checkTags", function(value) {
        return (value === value.replace(/(<([^>]+)>)/ig,""));
      },
      "HTMLタグは使用できません"
    );

    $('#contact_form').validate({
      errorClass: 'invalid',
       // それぞれの項目に適用される検証ルール 
      rules: {
        'company_name': { required: true },
        'your_name': { required: true },
        'email_address': { required: true, email: true },
        'inquiry': { required: true, checkTags: true }
      },
      messages: {
        'company_name': { required: '貴社名を入力してください。' },
        'your_name': { required: 'ご氏名を入力してください。' },
        'email_address': {
          required: 'Eメールアドレスを入力してください。',
          email: 'メールアドレスの形式が不正です。'
        },
        'inquiry': { required: 'お問い合わせ内容を入力してください。' }
      }
    });
  });

})(jQuery);