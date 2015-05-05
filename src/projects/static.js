import $ from 'jquery';
import magnific from 'Magnific-Popup';

export class ProjectBase {
  activate() {

    // //We don't want to scroll if we just got to this page
    // //The link's created for SWC will actually get SWC and not the blank fragment
    // //Since the links always use the first option
    // //That way, if you click on an SWC link, it will scroll.
    // if (instruction.fragment === '')
    //   return;

    var container = $('html,body'),
      scrollTo = $('#projectsContainer');

    //Not in mobile sized page
    if (container.width() > 767) {
      return;
    }

    container.animate({
      scrollTop: scrollTo.offset().top - container.offset().top + container.scrollTop() - 50 //Nav offset
    });
  }

  determineActivationStrategy() {
    return 'replace';
  }

  attached() {
    //This is necessary because magnific popup requires these atrributes
    //They are already on the image, and I don't want to double them up in the source, this is easier
    $('.image-link').each(function() {
      $(this).attr('title', this.alt);
      $(this).attr('href', this.src);
    });

    //Start magnific in gallery mode, with all the images on the page
    $('.image-link').magnificPopup({
      type: 'image',
      gallery: { enabled: true }
    });
  }
}
