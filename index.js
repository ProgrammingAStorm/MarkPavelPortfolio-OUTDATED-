window.scrollTo(0, 0);

$(".tabs").click(event => {
    event.preventDefault();

    const target = $(event.target).parent('li');
    const sibling = $(event.target).parent('li').siblings('li');
    const parent = $(target.parent().parent().parent());

    if(target.hasClass('is-active')) {
        target.removeClass('is-active').addClass('has-text-light');

        checkContent(target);
        checkContent(sibling);

        return;
    }

    target.removeClass('has-text-light').addClass('is-active');
    sibling.removeClass('is-active').addClass('has-text-light');

    checkContent(sibling);
    checkContent(target);
});

function checkContent(target) {
    const content = $(
        $(target).attr('data-content')
    );

    if(target.hasClass('is-active')) {
        content.removeClass('gone');
    } else {
        content.addClass('gone');
    }
}