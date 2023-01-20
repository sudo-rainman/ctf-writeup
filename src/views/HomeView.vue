<template>
  <div class="container">
    <h1>Lorem Ipsum</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam bibendum
      augue et sapien molestie hendrerit. Phasellus condimentum cursus odio, a
      consectetur arcu finibus id. Integer feugiat rutrum massa, nec bibendum
      quam auctor in. Duis imperdiet, justo eget hendrerit ultrices, ipsum
      tellus eleifend metus, vel bibendum tellus sem vitae libero. Morbi
      suscipit id lectus sed sagittis. Duis id massa metus. Nam non risus
      venenatis, mattis diam ut, congue massa. Quisque a massa non ante
      tristique gravida. Interdum et malesuada fames ac ante ipsum primis in
      faucibus. Nulla eu tempor augue. Integer congue vestibulum pulvinar. Ut
      venenatis tristique condimentum. Praesent pellentesque dictum orci a
      auctor. Donec gravida ante nec ornare placerat. Nullam blandit orci eu mi
      scelerisque, eget mollis velit vestibulum. Mauris congue magna metus,
      egestas dapibus massa tincidunt id.
    </p>
    <NavItem to="/GayPage">Gay</NavItem>
    <NavItem to="/VeryGayPage">Very Gay Page</NavItem>
    <HighLight autodetect v-bind:code="code" />
    <!-- <p>
      Quisque rutrum sapien odio, ac sollicitudin metus ultricies at. Aliquam
      erat volutpat. Donec sed iaculis sapien. Ut tincidunt sollicitudin magna,
      et pulvinar odio iaculis nec. Morbi nec lacus bibendum purus tempor
      rhoncus ut a magna. Curabitur eu porttitor tellus. Nunc sed tempus risus.
      Integer sagittis, lectus sed varius ultricies, nisi dolor pharetra ante,
      et aliquam metus lorem sed nunc. Maecenas ac magna quis eros ultrices
      tincidunt et ut nibh. Donec blandit sapien eget ultrices gravida.
      Phasellus aliquet ligula est. Cras id lectus in magna efficitur euismod.
      Duis enim dui, facilisis id magna sit amet, vulputate mollis urna. Aliquam
      dapibus erat vitae tortor egestas interdum. Nullam ac hendrerit neque.
    </p>
    <p>
      Sed consequat feugiat eros, ut ornare nibh tincidunt id. Pellentesque
      tincidunt enim eu facilisis tincidunt. Vivamus non interdum enim, sed
      malesuada massa. Aenean vestibulum purus neque. Aliquam vestibulum dolor
      sed vehicula tincidunt. Integer id vehicula ante, vitae lobortis eros. Ut
      turpis erat, commodo quis ultrices id, tristique ut risus. Curabitur
      lectus, pretium eget pretium non, vehicula sed magna. Mauris eget risus
      rhoncus, blandit odio in, fermentum sapien. Aliquam id neque eget est
      aliquet faucibus. Phasellus viverra sit amet odio sit amet pellentesque.
      Donec viverra eu dui vel laoreet. Maecenas congue eros in nisl efficitur
      sollicitudin. Vivamus aliquam non mauris eu posuere. Nunc sed sapien sed
      sed ante lobortis ornare. Pellentesque volutpat cursus nulla eleifend
      scelerisque.
    </p>
    <p>
      Fusce ullamcorper metus ut dolor porta vehicula. Etiam cursus nisi ipsum.
      Duis at nibh felis. Sed in quam ultricies, semper eros vitae, bibendum
      lorem. Sed orci sem, ornare eu metus sed, aliquam maximus tellus. Mauris
      semper ultricies purus non tempor. Pellentesque condimentum tempus
      condimentum. Nulla et maximus quam, id tempus mi. Nunc quis facilisis
      nisi. Suspendisse feugiat diam at diam tristique, id ultricies tellus
      placerat. Aenean quis iaculis erat, ac fringilla enim. Vivamus luctus mi
      vitae maximus sagittis. Nullam nec nulla sem. Donec scelerisque laoreet
      erat, a gravida ante bibendum vitae.
    </p>
    <p>
      Morbi hendrerit vulputate faucibus. Pellentesque tempor lectus in neque
      elementum varius. Etiam sed lacus nec mauris gravida rhoncus non eget
      neque. Quisque placerat malesuada orci, a lobortis felis tempor in.
      Suspendisse iaculis luctus quam eget placerat. Nullam placerat arcu sit
      amet suscipit commodo. Maecenas sagittis a dolor in venenatis. Aenean
      aliquam, mi vitae bibendum convallis, odio magna ultricies mauris, quis
      interdum ex massa at lacus. Phasellus ultrices at ligula in ultrices.
      Fusce blandit sit amet sem vel sodales. Vivamus sit amet lacinia orci. In
      pellentesque est et sollicitudin dictum.
    </p> -->
  </div>
</template>

<style>
.container {
  /* display: inline-block; */

  line-height: 1.7em;
  text-align: justify;
  text-justify: inter-word;
  width: 60em;
  /* flex-grow: 2; */
  /* flex-basis: min-content; */
}
</style>

<script>
export default {
  setup() {
    const code = String.raw`def androaxml_main(inp, outp=None, resource=None):
    ret_type = androconf.is_android(inp)
    if ret_type == "APK":
        a = apk.APK(inp)
        if resource:
            if resource not in a.files:
                print("The APK does not contain a file called '{}'".format(resource), file=sys.stderr)
                sys.exit(1)

            axml = AXMLPrinter(a.get_file(resource)).get_xml_obj()
        else:
            axml = a.get_android_manifest_xml()
    elif ".xml" in inp:
        axml = AXMLPrinter(read(inp)).get_xml_obj()
    else:
        print("Unknown file type")
        sys.exit(1)

    buff = etree.tostring(axml, pretty_print=True, encoding="utf-8")
    if outp:
        with open(outp, "wb") as fd:
            fd.write(buff)
    else:
        print("asdaasdsadasdsadas dasdasdasd asdasdsadasdsads adsadsadsadsads adasds adsadasdasd asdasdasdsadasdasdasdasdasdasdasdasdasdsadsadsdasddasd")`;
    return {
      code,
    };
  },
};
</script>
