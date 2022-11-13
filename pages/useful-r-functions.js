import ProjectHeader from '../components/ProjectHeader';

export default function UsefulRFunctions() {
  return (
    <main className="grid grid-cols-1 min-h-screen bg-gray-900 animate-gradient-y font-montserrat text-white max-w-screen">
      <ProjectHeader
        name="Useful R Functions"
        tech={['R', 'RStudio']}
        gitLink="https://github.com/bob-pham/Useful-R-Functions"
      />
      <div className="grid place-self-center w-11/12 text-white mb-10 max-w-screen">
        <p>
          A collection of R functions that make certain calculations simpler.
          Built on top of pre-existing R functions. Copy + Paste into RStudio or
          similar. (File on GitHub link Above)
          <br />
          <br />
          Functions For Calculating:
        </p>
        <ul className="list-disc leading-4 place-self-center">
          <li>
            Standard Error for Sample Proportions/Means/Independent Groups
          </li>
          <li>
            Test Statistic for Sample Proportions/Means (unknown SD)/Independent
            Groups/Dependent Groups
          </li>
          <li>Test Statistic for Analysis of Variance</li>
          <li>
            Confidence intervals for Sample Proportion (with + without SE)
          </li>
          <li>
            Confidence intervals for Sample Means (with + without SE,
            known/unknown population SD)
          </li>
          <li>Confidence intervals for Independent Groups </li>
          <li>Margin of Error (from Confidence Level)</li>
          <li>Minimum Sample size given margin of error</li>
          <li>Regression Line Model Slope + Intercepts</li>
        </ul>
        <div className="flex flex-col w-1/2 place-self-center">
          <h1 className="text-xl mt-10 text-center">
            Development + Implementation
          </h1>
          <div className="divider"></div>
        </div>
        <p>
          These were developed as I found certain calculations tedious, with no
          simpler way of calculating them with R, or in-built R calcuations gave
          excess superfluous information. Since I was already using R as a tool
          in many of these calcuations, I wrote these functions to automate the
          entire calculations.
        </p>
      </div>
      <div className="mockup-code w-3/4 place-self-center">
        <pre data-prefix="1">
          <code>
            {
              '# ------------------------------------------------------------------------'
            }
          </code>
        </pre>
        <pre data-prefix="2">
          <code>{'# CTRL-A COPY THIS ENTIRE THING AND PASTE IT INTO R'}</code>
        </pre>
        <pre data-prefix="3">
          <code>
            {
              '# FUNCTIONS RELY ON ONE ANOTHER, SAFEST JUST TO COPY THE ENTIRE THING'
            }
          </code>
        </pre>
        <pre data-prefix="4">
          <code>
            {
              '# ------------------------------------------------------------------------'
            }
          </code>
        </pre>
        <pre data-prefix="5">
          <code>{''}</code>
        </pre>
        <pre data-prefix="6">
          <code>{'#Calculates Standard Error for Sample Proportions'}</code>
        </pre>
        <pre data-prefix="7">
          <code>{'se_prop <- function(phat, n) {'}</code>
        </pre>
        <pre data-prefix="8">
          <code>{'	return (sqrt(phat * (1-phat) / n))'}</code>
        </pre>
        <pre data-prefix="9">
          <code>{'}'}</code>
        </pre>
        <pre data-prefix="10">
          <code>{''}</code>
        </pre>
        <pre data-prefix="11">
          <code>{'#Calculates Standard Error for Sample Means'}</code>
        </pre>
        <pre data-prefix="12">
          <code>{'se_mean <- function(s, n) {'}</code>
        </pre>
        <pre data-prefix="13">
          <code>{'	return (s/sqrt(n))'}</code>
        </pre>
        <pre data-prefix="14">
          <code>{'}'}</code>
        </pre>
        <pre data-prefix="15">
          <code>{''}</code>
        </pre>
        <pre data-prefix="16">
          <code>{'#Calculates Standard Error for Independent Groups '}</code>
        </pre>
        <pre data-prefix="17">
          <code>{'se_igroups <- function(s1,s2,n1,n2) {'}</code>
        </pre>
        <pre data-prefix="18">
          <code>{'	return (sqrt((s1^2/n1) + (s2^2/n2)))'}</code>
        </pre>
        <pre data-prefix="19">
          <code>{'}'}</code>
        </pre>
        <pre data-prefix="20">
          <code>{''}</code>
        </pre>
        <pre data-prefix="21">
          <code>{'#Calculates Test Statistic for Sample Proportions'}</code>
        </pre>
        <pre data-prefix="22">
          <code>{'ts_prop <- function(phat, p0, n) {'}</code>
        </pre>
        <pre data-prefix="23">
          <code>{'    return ((phat-p0)/sqrt((p0*(1-p0))/n))'}</code>
        </pre>
        <pre data-prefix="24">
          <code>{'}'}</code>
        </pre>
        <pre data-prefix="25">
          <code>{''}</code>
        </pre>
        <pre data-prefix="26">
          <code>
            {
              '#Calculates Test Statistic for Sample Means (if sd known use pnorm)'
            }
          </code>
        </pre>
        <pre data-prefix="27">
          <code>{'ts_mean <- function(ybar, mew, se, n) {'}</code>
        </pre>
        <pre data-prefix="28">
          <code>{'	return ((ybar - mew)/se_mean(se,n))'}</code>
        </pre>
        <pre data-prefix="29">
          <code>{'} '}</code>
        </pre>
        <pre data-prefix="30">
          <code>{''}</code>
        </pre>
        <pre data-prefix="31">
          <code>{'#Calculates Test Statistic for Independent Groups'}</code>
        </pre>
        <pre data-prefix="32">
          <code>
            {'ts_igroups <- function(ybar1, ybar2, se1, se2, n1, n2, delta) {'}
          </code>
        </pre>
        <pre data-prefix="33">
          <code>
            {'	return ((ybar1 - ybar2 - delta)/se_igroups(se1, se2, n1, n2))'}
          </code>
        </pre>
        <pre data-prefix="34">
          <code>{'}'}</code>
        </pre>
        <pre data-prefix="35">
          <code>{''}</code>
        </pre>
        <pre data-prefix="36">
          <code>{'#Calculates Test Statistic for Independent Groups'}</code>
        </pre>
        <pre data-prefix="37">
          <code>{'ts_igroups <- function(ybar1, ybar2, se, delta) {'}</code>
        </pre>
        <pre data-prefix="38">
          <code>{'	return ((ybar1 - ybar2 - delta)/se)'}</code>
        </pre>
        <pre data-prefix="39">
          <code>{'}'}</code>
        </pre>
        <pre data-prefix="40">
          <code>{''}</code>
        </pre>
        <pre data-prefix="41">
          <code>{'#Calculates Test Statistic for Dependent Groups'}</code>
        </pre>
        <pre data-prefix="42">
          <code>{'ts_dgroups <- function(dbar, SD, n, delta) {'}</code>
        </pre>
        <pre data-prefix="43">
          <code>{'	return ((dbar - delta)/(SD/(sqrt(n))))'}</code>
        </pre>
        <pre data-prefix="44">
          <code>{'}'}</code>
        </pre>
        <pre data-prefix="45">
          <code>{''}</code>
        </pre>
        <pre data-prefix="46">
          <code>{'#Calculates Test Statistic for Analysis of Variance'}</code>
        </pre>
        <pre data-prefix="47">
          <code>{'ts_var <- function(mst, mse) {'}</code>
        </pre>
        <pre data-prefix="48">
          <code>{'	return (mst/mse)'}</code>
        </pre>
        <pre data-prefix="49">
          <code>{'}'}</code>
        </pre>
        <pre data-prefix="50">
          <code>{''}</code>
        </pre>
        <pre data-prefix="51">
          <code>
            {'#Returns proportion of population for confidence interval'}
          </code>
        </pre>
        <pre data-prefix="52">
          <code>{'ci_up_bound <- function(conf_level) {'}</code>
        </pre>
        <pre data-prefix="53">
          <code>{'	return((conf_level) + ((1-conf_level)/2))'}</code>
        </pre>
        <pre data-prefix="54">
          <code>{'}'}</code>
        </pre>
        <pre data-prefix="55">
          <code>{''}</code>
        </pre>
        <pre data-prefix="56">
          <code>{'#Prints Confidence Intervals for Sample Proportions'}</code>
        </pre>
        <pre data-prefix="57">
          <code>{'ci_prop <- function (phat, n, conf_level) {	'}</code>
        </pre>
        <pre data-prefix="58">
          <code>{'	me <- me_prop(conf_level, se_prop(phat, n))'}</code>
        </pre>
        <pre data-prefix="59">
          <code>{'	'}</code>
        </pre>
        <pre data-prefix="60">
          <code>{'	print(paste("Upper bound: ", (phat + me)))'}</code>
        </pre>
        <pre data-prefix="61">
          <code>{'    print(paste("Lower bound: ", (phat - me)))	'}</code>
        </pre>
        <pre data-prefix="62">
          <code>{'}'}</code>
        </pre>
        <pre data-prefix="63">
          <code>{''}</code>
        </pre>
        <pre data-prefix="64">
          <code>
            {'#Prints Confidence Intervals for Sample Proportions (se given)'}
          </code>
        </pre>
        <pre data-prefix="65">
          <code>{'ci_prop_se <- function(phat, se, conf_level) {'}</code>
        </pre>
        <pre data-prefix="66">
          <code>{'	me <- me_prop(conf_level, se)'}</code>
        </pre>
        <pre data-prefix="67">
          <code>{''}</code>
        </pre>
        <pre data-prefix="68">
          <code>{'	print(paste("Upper bound: ", (phat + me)))'}</code>
        </pre>
        <pre data-prefix="69">
          <code>{'    print(paste("Lower bound: ", (phat - me)))'}</code>
        </pre>
        <pre data-prefix="70">
          <code>{'}'}</code>
        </pre>
        <pre data-prefix="71">
          <code>{''}</code>
        </pre>
        <pre data-prefix="72">
          <code>{'#Prints Confidence Intervals for Sample Means '}</code>
        </pre>
        <pre data-prefix="73">
          <code>{'ci_mean <-function(ybar, s, n, conf_level) {'}</code>
        </pre>
        <pre data-prefix="74">
          <code>{'	t_star <- qt(ci_up_bound(conf_level), n-1)'}</code>
        </pre>
        <pre data-prefix="75">
          <code>{'	'}</code>
        </pre>
        <pre data-prefix="76">
          <code>{'	int <- (t_star * se_mean(s, n))'}</code>
        </pre>
        <pre data-prefix="77">
          <code>{'	'}</code>
        </pre>
        <pre data-prefix="78">
          <code>{'	print(paste("Upper bound: ", (ybar + int)))'}</code>
        </pre>
        <pre data-prefix="79">
          <code>{'    print(paste("Lower bound: ", (ybar - int)))	'}</code>
        </pre>
        <pre data-prefix="80">
          <code>{'}'}</code>
        </pre>
        <pre data-prefix="81">
          <code>{''}</code>
        </pre>
        <pre data-prefix="82">
          <code>
            {'#Prints Confidence Intervals for Sample Means (se given)'}
          </code>
        </pre>
        <pre data-prefix="83">
          <code>{'ci_mean_se <-function(ybar, se, n, conf_level) {'}</code>
        </pre>
        <pre data-prefix="84">
          <code>{'	t_star <- qt(ci_up_bound(conf_level), n-1)'}</code>
        </pre>
        <pre data-prefix="85">
          <code>{'	'}</code>
        </pre>
        <pre data-prefix="86">
          <code>{'	int <- (t_star * se)'}</code>
        </pre>
        <pre data-prefix="87">
          <code>{'	'}</code>
        </pre>
        <pre data-prefix="88">
          <code>{'	print(paste("Upper bound: ", (ybar + int)))'}</code>
        </pre>
        <pre data-prefix="89">
          <code>{'    print(paste("Lower bound: ", (ybar - int)))	'}</code>
        </pre>
        <pre data-prefix="90">
          <code>{'}'}</code>
        </pre>
        <pre data-prefix="91">
          <code>{''}</code>
        </pre>
        <pre data-prefix="92">
          <code>{''}</code>
        </pre>
        <pre data-prefix="93">
          <code>
            {
              '#Prints Confidence Intervals for Sample Means with known population sd'
            }
          </code>
        </pre>
        <pre data-prefix="94">
          <code>
            {'ci_mean_known <-function(ybar, sigma, n, conf_level) {'}
          </code>
        </pre>
        <pre data-prefix="95">
          <code>{'	z_star <- qnorm(ci_up_bound(conf_level), n-1)'}</code>
        </pre>
        <pre data-prefix="96">
          <code>{'	'}</code>
        </pre>
        <pre data-prefix="97">
          <code>{'	int <- (z_star * se_mean(sigma, n))'}</code>
        </pre>
        <pre data-prefix="98">
          <code>{'	'}</code>
        </pre>
        <pre data-prefix="99">
          <code>{'	print(paste("Upper bound: ", (ybar + int)))'}</code>
        </pre>
        <pre data-prefix="100">
          <code>{'    print(paste("Lower bound: ", (ybar - int)))	'}</code>
        </pre>
        <pre data-prefix="101">
          <code>{'}'}</code>
        </pre>
        <pre data-prefix="102">
          <code>{''}</code>
        </pre>
        <pre data-prefix="103">
          <code>{'#Prints Confidence Intervals for Independent Groups '}</code>
        </pre>
        <pre data-prefix="104">
          <code>
            {'ci_igroups <- function(y1, y2, s1, s2, n1, n2, conf_level) {'}
          </code>
        </pre>
        <pre data-prefix="105">
          <code>{'    t_star <- 0'}</code>
        </pre>
        <pre data-prefix="106">
          <code>{'	confidence <- ci_up_bound(conf_level)    '}</code>
        </pre>
        <pre data-prefix="107">
          <code>{'		'}</code>
        </pre>
        <pre data-prefix="108">
          <code>{'    if (n1 < n2) {'}</code>
        </pre>
        <pre data-prefix="109">
          <code>{'        t_star <- qt(confidence, n1-1)'}</code>
        </pre>
        <pre data-prefix="110">
          <code>{'    } else {'}</code>
        </pre>
        <pre data-prefix="111">
          <code>{'        t_star <- qt(confidence, n2-1)'}</code>
        </pre>
        <pre data-prefix="112">
          <code>{'    }'}</code>
        </pre>
        <pre data-prefix="113">
          <code>{'	'}</code>
        </pre>
        <pre data-prefix="114">
          <code>{'    int <- (t_star* se_igroups(s1,s2,n1,n2))'}</code>
        </pre>
        <pre data-prefix="115">
          <code>{'    '}</code>
        </pre>
        <pre data-prefix="116">
          <code>{'    print(paste("Upper bound: ", ((y1-y2) + int)))'}</code>
        </pre>
        <pre data-prefix="117">
          <code>{'    print(paste("Lower bound: ", ((y1-y2) - int)))'}</code>
        </pre>
        <pre data-prefix="118">
          <code>{'}'}</code>
        </pre>
        <pre data-prefix="119">
          <code>{''}</code>
        </pre>
        <pre data-prefix="120">
          <code>{'#Prints Confidence Intervals for Independent Groups '}</code>
        </pre>
        <pre data-prefix="121">
          <code>
            {'ci_igroups_se <- function(difference, se, nmin, conf_level) {'}
          </code>
        </pre>
        <pre data-prefix="122">
          <code>{'    t_star <- 0'}</code>
        </pre>
        <pre data-prefix="123">
          <code>{'	confidence <- ci_up_bound(conf_level)    '}</code>
        </pre>
        <pre data-prefix="124">
          <code>{'	'}</code>
        </pre>
        <pre data-prefix="125">
          <code>{'    t_star <- qt(confidence, nmin-1)'}</code>
        </pre>
        <pre data-prefix="126">
          <code>{''}</code>
        </pre>
        <pre data-prefix="127">
          <code>{'	'}</code>
        </pre>
        <pre data-prefix="128">
          <code>{'    int <- (t_star * se)'}</code>
        </pre>
        <pre data-prefix="129">
          <code>{'    '}</code>
        </pre>
        <pre data-prefix="130">
          <code>{'    print(paste("Upper bound: ", (difference + int)))'}</code>
        </pre>
        <pre data-prefix="131">
          <code>{'    print(paste("Lower bound: ", (difference - int)))'}</code>
        </pre>
        <pre data-prefix="132">
          <code>{'}'}</code>
        </pre>
        <pre data-prefix="133">
          <code>{''}</code>
        </pre>
        <pre data-prefix="134">
          <code>{'#Prints Confidence Intervals for Independent Groups '}</code>
        </pre>
        <pre data-prefix="135">
          <code>
            {'ci_dgroups <- function(dbar, deviation, n, conf_level) {'}
          </code>
        </pre>
        <pre data-prefix="136">
          <code>{'	t_star <- qt(ci_up_bound(conf_level), n-1)'}</code>
        </pre>
        <pre data-prefix="137">
          <code>{'	'}</code>
        </pre>
        <pre data-prefix="138">
          <code>{'	int <- (t_star * (deviation/sqrt(n)))'}</code>
        </pre>
        <pre data-prefix="139">
          <code>{'	'}</code>
        </pre>
        <pre data-prefix="140">
          <code>{'	print(paste("Upper bound: ", (dbar + int)))'}</code>
        </pre>
        <pre data-prefix="141">
          <code>{'    print(paste("Lower bound: ", (dbar - int)))'}</code>
        </pre>
        <pre data-prefix="142">
          <code>{'}'}</code>
        </pre>
        <pre data-prefix="143">
          <code>{''}</code>
        </pre>
        <pre data-prefix="144">
          <code>{'#Returns slope (b1) from r sy and sx'}</code>
        </pre>
        <pre data-prefix="145">
          <code>{'rl_b1 <- function(r,sy,sx) {'}</code>
        </pre>
        <pre data-prefix="146">
          <code>{'    return(r*sy/sx)'}</code>
        </pre>
        <pre data-prefix="147">
          <code>{'}'}</code>
        </pre>
        <pre data-prefix="148">
          <code>{''}</code>
        </pre>
        <pre data-prefix="149">
          <code>
            {'#Returns y-intercept (b0) from slope(b1), xmean, and ymean'}
          </code>
        </pre>
        <pre data-prefix="150">
          <code>{'rl_b0 <- function(xmean,ymean,slope) {'}</code>
        </pre>
        <pre data-prefix="151">
          <code>{'    return (ymean-(slope*xmean))'}</code>
        </pre>
        <pre data-prefix="152">
          <code>{'}'}</code>
        </pre>
        <pre data-prefix="153">
          <code>{''}</code>
        </pre>
        <pre data-prefix="154">
          <code>{'#Predicts y-value from x, slope and intercept'}</code>
        </pre>
        <pre data-prefix="155">
          <code>{'rl_predicty <- function(x, b1, b0) {'}</code>
        </pre>
        <pre data-prefix="156">
          <code>
            {'    print(paste("predicted value of y: ", ((x*b1) + b0)))'}
          </code>
        </pre>
        <pre data-prefix="157">
          <code>{'}'}</code>
        </pre>
        <pre data-prefix="158">
          <code>{''}</code>
        </pre>
        <pre data-prefix="159">
          <code>{'#Predicts x-value from y, slope and intercept'}</code>
        </pre>
        <pre data-prefix="160">
          <code>{'rl_predictx <- function(y,b1,b0) {'}</code>
        </pre>
        <pre data-prefix="161">
          <code>
            {'    print(paste("approximate x value of: ", ((y-b0)/b1)))'}
          </code>
        </pre>
        <pre data-prefix="162">
          <code>{'}'}</code>
        </pre>
        <pre data-prefix="163">
          <code>{''}</code>
        </pre>
        <pre data-prefix="164">
          <code>{'#Returns the margin of error'}</code>
        </pre>
        <pre data-prefix="165">
          <code>{'me_prop <- function(conf_level,se) {'}</code>
        </pre>
        <pre data-prefix="166">
          <code>{'    z_star <- qnorm(ci_up_bound(conf_level))'}</code>
        </pre>
        <pre data-prefix="167">
          <code>{'    return (z_star * se)'}</code>
        </pre>
        <pre data-prefix="168">
          <code>{'}'}</code>
        </pre>
        <pre data-prefix="169">
          <code>{''}</code>
        </pre>
        <pre data-prefix="170">
          <code>{'#Returns appropriate n '}</code>
        </pre>
        <pre data-prefix="171">
          <code>{'n_prop <- function(phat, conf_level, me) {'}</code>
        </pre>
        <pre data-prefix="172">
          <code>{'	z_star <- qnorm(ci_up_bound(conf_level))'}</code>
        </pre>
        <pre data-prefix="173">
          <code>{'	'}</code>
        </pre>
        <pre data-prefix="174">
          <code>{'	return (((z_star^2)*phat*(1-phat))/(me^2))'}</code>
        </pre>
        <pre data-prefix="175">
          <code>{'}'}</code>
        </pre>
      </div>
    </main>
  );
}
