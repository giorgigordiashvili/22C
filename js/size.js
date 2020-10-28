 
      $(function() {
        $(".sizesContainer a").each(function(idx) {
            var $this = $(this);
            var selectElm = $("select", $this.parent());
            var cartButtonText = $this.attr('data-cart-button-text');
            var cartButtonTextContainer = $('.to-bag span', $this.closest(".buttons"));

            $this.click(function() {
                if ($this.is('[data-out=1]')) {
                    return false;
                }
                if ($(this).attr('data-preorder')) {
                    $("#addtobag").text("PREORDER");
                }

                $("a", $this.parent()).removeClass('active');
                $this.addClass('active');
                $('option', selectElm).eq(idx + 1).prop('selected', true);
                cartButtonTextContainer.html(cartButtonText);
                $("#addtobag").attr("onclick", `addToCart('9977',getSize);`);
                $("#addtowishlist").attr("onclick", `addToWishlist('9977', getSize);`);


            });
        });
    });

    function getSize() {
        if (document.getElementById("size"))
            return document.getElementById("size").value || "-1";
        else return -1;
    }