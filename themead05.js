$s=jQuery.noConflict();let mySwiper;var smTheme={options:{circleSection:'.circles-section',circleItem:'.circle-item'},init(){this.circleHover()
const mediaQuery=window.matchMedia('(max-width: 767px)')
if(mediaQuery.matches){$s('.languageSwitcher').insertAfter('.primary-menu-container > ul')}else{$s('.languageSwitcher').insertAfter('.primary-menu-container')}
this.addAnimation('.wpcf7-list-item')},circleHover(){var section=$s(this.options.circleSection);var item=$s(this.options.circleItem);item.hover(function(){var self=$s(this);self.addClass('is-active')
section.addClass('is-hovered')
$s(self.attr('data-image-id')).addClass('is-active')},function(){var self=$s(this);self.removeClass('is-active')
section.removeClass('is-hovered')
$s(self.attr('data-image-id')).removeClass('is-active')})},enableSwiper(){mySwiper=new Swiper('.swiper-container',{loop:true,pagination:{el:'.gc_swiper-pagination',},centeredSlides:true,slidesPerView:1,spaceBetween:20});},addAnimation(elem,animation='fadeInRight'){$s(elem).addClass(`wpb_animate_when_almost_visible wpb_${animation} ${animation}`)}}
smTheme.init();