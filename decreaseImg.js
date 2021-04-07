function auto_size (img,max_width,max_height)
{
 if (img.width>maxwidth) 
 {
  width = img.width; height = img.height;
  img.width = maxwidth;
  img.height = (maxwidth*height)/width;
 }
 
 if (img.height>maxheight) 
 {
  width = img.width; height = img.height;
  img.height = maxheight;
  img.width = (maxheight*width)/height;
 }
}
