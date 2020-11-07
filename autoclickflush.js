var timecount = 0;
var nums = [
  "18XXXXXXXXX",
  "18XXXXXXXXX"
]

function autoClick() {
  // 当前内容是PDF阅读
  if ($('.chapter a.current').parent().find('.icon').html().indexOf('svgicon-clazz-pd') > 0) {
    // 找到下一节课的a元素点击
    var aDom = $('.clock.clock-fixed').find('a')
    // 找到了a元素
    if (aDom.length > 0) {
      window.location.href = aDom.attr('href')
    }
    return
  }
  // 自动点击下一节课
  if ($('.venom-btn-primary').length > 0) {
    $('.venom-btn-primary').click()
  } else { // 自动点击播放￿￿￿￿
    $('.vjs-big-play-button').click()
  }
}

var interval = setInterval(autoClick, 2000);
