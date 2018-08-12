// Created by iWeb 3.0.2 local-build-20180812

function writeMovie1()
{detectBrowser();if(windowsInternetExplorer)
{document.write('<object id="id2" classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab" width="576" height="331" style="height: 331px; position: relative; width: 576px; " class="inline-block"><param name="src" value="Media/sphere_tfsf-_1_.mp4"/><param name="controller" value="true"/><param name="autoplay" value="true"/><param name="scale" value="tofit"/><param name="volume" value="100"/><param name="loop" value="true"/></object>');}
else if(isiPhone)
{document.write('<object id="id2" type="video/quicktime" width="576" height="331" style="height: 331px; position: relative; width: 576px; " class="inline-block"><param name="src" value="Research_files/sphere_tfsf-_1_.jpg"/><param name="target" value="myself"/><param name="href" value="../Media/sphere_tfsf-_1_.mp4"/><param name="controller" value="true"/><param name="scale" value="tofit"/></object>');}
else
{document.write('<object id="id2" type="video/quicktime" width="576" height="331" data="Media/sphere_tfsf-_1_.mp4" style="height: 331px; position: relative; width: 576px; " class="inline-block"><param name="src" value="Media/sphere_tfsf-_1_.mp4"/><param name="controller" value="true"/><param name="autoplay" value="true"/><param name="scale" value="tofit"/><param name="volume" value="100"/><param name="loop" value="true"/></object>');}}
setTransparentGifURL('Media/transparent.gif');function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Research_files/ResearchMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');Widget.onload();fixAllIEPNGs('Media/transparent.gif');performPostEffectsFixups()}
function onPageUnload()
{Widget.onunload();}
