<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
<script>
// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var modalImg = $("#img01");
var captionText = document.getElementById("caption");

/* this adds the imag src from alt rather than having to add it manually*/
$('.modalImg').attr("src", function() {
  return "images/lecture01/html_template_" + this.alt + ".png";
  });

/* this adds iframe */
$('.modalImg').click(function(){
    modal.style.display = "block";
    var newSrc = "images/output/html/html_template_" + this.alt + ".html";
    modalImg.attr('src', newSrc);
    captionText.innerHTML = this.alt;
});

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
</script>
