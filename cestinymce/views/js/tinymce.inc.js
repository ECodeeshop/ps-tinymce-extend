/**
 * Copyright since 2007 PrestaShop SA and Contributors
 * PrestaShop is an International Registered Trademark & Property of PrestaShop SA
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Academic Free License version 3.0
 * that is bundled with this package in the file LICENSE.md.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/AFL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * @author    PrestaShop SA and Contributors <contact@prestashop.com>
 * @copyright Since 2007 PrestaShop SA and Contributors
 * @license   https://opensource.org/licenses/AFL-3.0 Academic Free License version 3.0
 */
const all_plugins = 'align colorpicker link image filemanager table media placeholder lists advlist code table autoresize preview importcss searchreplace autolink directionality code visualblocks visualchars fullscreen image link media table charmap pagebreak nonbreaking anchor insertdatetime advlist lists wordcount charmap emoticons';
const toolbar1 = 'undo redo | fontselect fontsize fontsizeselect formatselect | colorpicker | bold italic underline strikethrough | align numlist bullist | link image | table media | lineheight outdent indent| forecolor backcolor removeformat typography | charmap emoticons | code fullscreen preview | print | pagebreak anchor | ltr rtl';
const quickbars_selection_toolbar = 'bold italic | quicklink h2 h3 blockquote quickimage quicktable';
const content_style = `@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap');`;

window.defaultTinyMceConfig = {
  plugins: all_plugins,
  // toolbar: "undo redo | accordion accordionremove | blocks fontfamily fontsize sizeselect fontselect fontsizeselect | bold italic underline strikethrough | align numlist bullist | link image | table media | lineheight outdent indent| forecolor backcolor removeformat | charmap emoticons | code fullscreen preview | save print | pagebreak anchor codesample | ltr rtl | formatselect",
  quickbars_selection_toolbar: quickbars_selection_toolbar,
  toolbar_mode: 'sliding',
  toolbar1: toolbar1,
  toolbar2: '',
  external_filemanager_path: baseAdminDir + 'filemanager/',
  fontsize_formats: '8pt 10pt 12pt 14pt 18pt 24pt 36pt 48pt 52px 72px 108px',
  content_style: lang_is_rtl === '1' ? 'body {direction:rtl;}' : content_style,
  font_formats: lang_is_rtl === '1' ? '' : "Playfair Display= 'Playfair Display', serif; Poppins,sans-serif=Poppins,sans-serif; Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Symbol=symbol; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva; Webdings=webdings; Wingdings=wingdings,zapf dingbats",
  skin: 'prestashop',
  mobile: {
    theme: 'mobile',
    plugins: ['lists', 'align', 'link', 'table', 'placeholder', 'advlist', 'code'],
    toolbar:
      'undo code colorpicker bold italic underline strikethrough blockquote link align bullist numlist table formatselect styleselect',
  },
  menubar: 'edit insert format'
};

console.clear()
console.log(window.defaultTinyMceConfig)