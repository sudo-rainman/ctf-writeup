<template>
  <div class="container">
    <h3>about</h3>
    <hr/>
    <p>
      hi! My name is Long aka lil TN. I am playing CTF for team <a href="https://bkisc.com"> BKISC </a> mainly as a Cryptographer. 
    </p>
    <p>
      i started out on CTF from March 2022. So this blog mainly contains writeups in my CTF thingy journey (ye i likes to play LOL thats why my blog looks like this lmao).
    </p>
    <h3> resource u shud check out</h3>
    <hr/>
    <ul>
      <li>
          Known RSA Attacks: <a href="https://crypto.stanford.edu/~dabo/pubs/papers/RSA-survey.pdf">pdf-link</a> 
      </li>
    </ul>
    <ul>
      <li>
          Approachable Lattice-Based Cryptanalysis: <a href="https://eprint.iacr.org/2023/032.pdf">pdf-link</a> 
      </li>
    </ul>
        <ul>
      <li>
          Abstract Algebra Theory For Beginner:  <a href="http://abstract.ups.edu/aata/aata.html">link</a> 
      </li>
    </ul>

    <h3> contact me </h3>
    <hr/>
    <p> updatin </p>
    <!-- <router-link to="/test">Test</router-link> -->
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
<!-- 
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
</script> -->
