import clsx from 'clsx'
import styles from './intro.module.sass'
import { CarsSlider } from './SliderCars'

const Intro = () => {
  return (
    <>
      <div className={styles.wrapp}>
        <section className={styles.intro} id="main">
          <div className="container">
            <div className={styles.intro__inner}>
              <div className={styles.inner__searching__block}>
                <form className={styles.searching__content}>
                  <div className={styles.input__options}>
                    <select className={styles.select__options} name="car-auction" id="car-auction">
                      <option value="1">Аукцион - www.copart.com</option>
                      <option value="2">Аукцион - www.iaai.com</option>
                    </select>
                  </div>
                  <div className={styles.input__options}>
                    <select className={styles.select__options} name="brand" id="id_brand">
                      <option value="">Марка</option>
                      <option value="1">AC</option>
                      <option value="2">Acura</option>
                      <option value="3">Alfa Romeo</option>
                      <option value="4">Alpine</option>
                      <option value="5">AM General</option>
                      <option value="6">Ariel</option>
                      <option value="7">Aro</option>
                      <option value="8">Asia</option>
                      <option value="9">Aston Martin</option>
                      <option value="10">Audi</option>
                      <option value="11">Austin</option>
                      <option value="12">Autobianchi</option>
                      <option value="13">Baltijas Dzips</option>
                      <option value="14">Beijing</option>
                      <option value="15">Bentley</option>
                      <option value="16">Bertone</option>
                      <option value="17">Bitter</option>
                      <option value="18">BMW</option>
                      <option value="19">BMW Alpina</option>
                      <option value="20">Brabus</option>
                      <option value="21">Brilliance</option>
                      <option value="22">Bristol</option>
                      <option value="23">Bufori</option>
                      <option value="24">Bugatti</option>
                      <option value="25">Buick</option>
                      <option value="26">BYD</option>
                      <option value="27">Byvin</option>
                      <option value="28">Cadillac</option>
                      <option value="29">Callaway</option>
                      <option value="30">Carbodies</option>
                      <option value="31">Caterham</option>
                      <option value="32">Changan</option>
                      <option value="33">ChangFeng</option>
                      <option value="34">Chery</option>
                      <option value="35">Chevrolet</option>
                      <option value="36">Chrysler</option>
                      <option value="37">Citroen</option>
                      <option value="38">Cizeta</option>
                      <option value="39">Coggiola</option>
                      <option value="40">Dacia</option>
                      <option value="41">Dadi</option>
                      <option value="42">Daewoo</option>
                      <option value="43">DAF</option>
                      <option value="44">Daihatsu</option>
                      <option value="45">Daimler</option>
                      <option value="46">Dallas</option>
                      <option value="47">Datsun</option>
                      <option value="48">De Tomaso</option>
                      <option value="49">DeLorean</option>
                      <option value="50">Derways</option>
                      <option value="51">Dodge</option>
                      <option value="52">DongFeng</option>
                      <option value="53">Doninvest</option>
                      <option value="54">Donkervoort</option>
                      <option value="55">E-Car</option>
                      <option value="56">Eagle</option>
                      <option value="57">Eagle Cars</option>
                      <option value="58">Ecomotors</option>
                      <option value="59">FAW</option>
                      <option value="60">Ferrari</option>
                      <option value="61">Fiat</option>
                      <option value="62">Fisker</option>
                      <option value="63">Ford</option>
                      <option value="64">Foton</option>
                      <option value="65">FSO</option>
                      <option value="66">Fuqi</option>
                      <option value="67">Geely</option>
                      <option value="68">Geo</option>
                      <option value="69">GMC</option>
                      <option value="70">Gonow</option>
                      <option value="71">Great Wall</option>
                      <option value="72">Hafei</option>
                      <option value="73">Haima</option>
                      <option value="74">Hindustan</option>
                      <option value="75">Holden</option>
                      <option value="76">Honda</option>
                      <option value="77">HuangHai</option>
                      <option value="78">Hummer</option>
                      <option value="79">Hyundai</option>
                      <option value="80">Infiniti</option>
                      <option value="81">Innocenti</option>
                      <option value="82">Invicta</option>
                      <option value="83">Iran Khodro</option>
                      <option value="84">Isdera</option>
                      <option value="85">Isuzu</option>
                      <option value="86">IVECO</option>
                      <option value="87">JAC</option>
                      <option value="88">Jaguar</option>
                      <option value="89">Jeep</option>
                      <option value="90">Jensen</option>
                      <option value="91">JMC</option>
                      <option value="92">Kia</option>
                      <option value="93">Koenigsegg</option>
                      <option value="94">KTM</option>
                      <option value="95">Lamborghini</option>
                      <option value="96">Lancia</option>
                      <option value="97">Land Rover</option>
                      <option value="98">Landwind</option>
                      <option value="99">Lexus</option>
                      <option value="100">Liebao Motor</option>
                      <option value="101">Lifan</option>
                      <option value="102">Lincoln</option>
                      <option value="103">Lotus</option>
                      <option value="104">LTI</option>
                      <option value="105">Luxgen</option>
                      <option value="106">Mahindra</option>
                      <option value="107">Marcos</option>
                      <option value="108">Marlin</option>
                      <option value="109">Marussia</option>
                      <option value="110">Maruti</option>
                      <option value="111">Maserati</option>
                      <option value="112">Maybach</option>
                      <option value="113">Mazda</option>
                      <option value="114">McLaren</option>
                      <option value="115">Mega</option>
                      <option value="116">Mercedes-Benz</option>
                      <option value="117">Mercury</option>
                      <option value="118">Metrocab</option>
                      <option value="119">MG</option>
                      <option value="120">Microcar</option>
                      <option value="121">Minelli</option>
                      <option value="122">Mini</option>
                      <option value="123">Mitsubishi</option>
                      <option value="124">Mitsuoka</option>
                      <option value="125">Morgan</option>
                      <option value="126">Morris</option>
                      <option value="127">Nissan</option>
                      <option value="128">Noble</option>
                      <option value="129">Oldsmobile</option>
                      <option value="130">Opel</option>
                      <option value="131">Osca</option>
                      <option value="132">Pagani</option>
                      <option value="133">Panoz</option>
                      <option value="134">Perodua</option>
                      <option value="135">Peugeot</option>
                      <option value="136">Piaggio</option>
                      <option value="137">Plymouth</option>
                      <option value="138">Pontiac</option>
                      <option value="139">Porsche</option>
                      <option value="140">Premier</option>
                      <option value="141">Proton</option>
                      <option value="142">PUCH</option>
                      <option value="143">Puma</option>
                      <option value="144">Qoros</option>
                      <option value="145">Qvale</option>
                      <option value="146">Reliant</option>
                      <option value="147">Renault</option>
                      <option value="148">Renault Samsung</option>
                      <option value="149">Rolls-Royce</option>
                      <option value="150">Ronart</option>
                      <option value="151">Rover</option>
                      <option value="152">Saab</option>
                      <option value="153">Saleen</option>
                      <option value="154">Santana</option>
                      <option value="155">Saturn</option>
                      <option value="156">Scion</option>
                      <option value="157">SEAT</option>
                      <option value="158">ShuangHuan</option>
                      <option value="159">Skoda</option>
                      <option value="160">Smart</option>
                      <option value="161">Soueast</option>
                      <option value="162">Spectre</option>
                      <option value="163">Spyker</option>
                      <option value="165">Ssang Yong</option>
                      <option value="166">Subaru</option>
                      <option value="167">Suzuki</option>
                      <option value="168">Talbot</option>
                      <option value="169">TATA</option>
                      <option value="170">Tatra</option>
                      <option value="171">Tazzari</option>
                      <option value="172">Tesla</option>
                      <option value="173">Tianma</option>
                      <option value="174">Tianye</option>
                      <option value="175">Tofas</option>
                      <option value="176">Toyota</option>
                      <option value="177">Trabant</option>
                      <option value="178">Tramontana</option>
                      <option value="179">Triumph</option>
                      <option value="180">TVR</option>
                      <option value="181">Vauxhall</option>
                      <option value="182">Vector</option>
                      <option value="183">Venturi</option>
                      <option value="184">Volkswagen</option>
                      <option value="185">Volvo</option>
                      <option value="186">Vortex</option>
                      <option value="187">Wartburg</option>
                      <option value="188">Westfield</option>
                      <option value="189">Wiesmann</option>
                      <option value="190">Xin Kai</option>
                      <option value="191">Zastava</option>
                      <option value="192">Zotye</option>
                      <option value="193">ZX</option>
                      <option value="280">Ultima</option>
                      <option value="282">Hawtai</option>
                      <option value="284">Renaissance</option>
                    </select>
                  </div>
                  <div className={styles.input__options}>
                    <select className={styles.select__options} name="meta_model" id="id_meta_model">
                      <option value="" selected={true}>
                        Модель
                      </option>
                    </select>
                  </div>

                  <div className={styles.years}>
                    <div className={styles.input__options}>
                      <select className={styles.select__options} name="meta_year_from" id="id_year_from">
                        <option value="2000" selected={true}>
                          Год выпуска от
                        </option>
                        <option value="2018">2018</option>
                        <option value="2017">2017</option>
                        <option value="2016">2016</option>
                        <option value="2015">2015</option>
                        <option value="2014">2014</option>
                        <option value="2013">2013</option>
                        <option value="2012">2012</option>
                        <option value="2011">2011</option>
                        <option value="2010">2010</option>
                        <option value="2009">2009</option>
                        <option value="2008">2008</option>
                        <option value="2007">2007</option>
                        <option value="2006">2006</option>
                        <option value="2005">2005</option>
                        <option value="2004">2004</option>
                        <option value="2003">2003</option>
                        <option value="2002">2002</option>
                        <option value="2001">2001</option>
                        <option value="2000">2000</option>
                      </select>
                    </div>
                    <div className={styles.input__options}>
                      <select className={styles.select__options} name="meta_year_to" id="id_year_to">
                        <option value="2018" selected={true}>
                          Год выпуска до
                        </option>
                        <option value="2018">2018</option>
                        <option value="2017">2017</option>
                        <option value="2016">2016</option>
                        <option value="2015">2015</option>
                        <option value="2014">2014</option>
                        <option value="2013">2013</option>
                        <option value="2012">2012</option>
                        <option value="2011">2011</option>
                        <option value="2010">2010</option>
                        <option value="2009">2009</option>
                        <option value="2008">2008</option>
                        <option value="2007">2007</option>
                        <option value="2006">2006</option>
                        <option value="2005">2005</option>
                        <option value="2004">2004</option>
                        <option value="2003">2003</option>
                        <option value="2002">2002</option>
                        <option value="2001">2001</option>
                        <option value="2000">2000</option>
                      </select>
                    </div>
                  </div>
                  <button className={styles.btn_search}>
                    <span>ПОИСК АВТО</span>
                  </button>
                </form>
              </div>
              <div className={styles.slider__cars}>
                <CarsSlider />
              </div>
            </div>
          </div>
        </section>
        <div className={styles.arrow_down}></div>
      </div>
    </>
  )
}
export default Intro
