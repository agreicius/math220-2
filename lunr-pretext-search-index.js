var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "colophon-1",
  "level": "1",
  "url": "colophon-1.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " copyright  "
},
{
  "id": "s_antiderivatives",
  "level": "1",
  "url": "s_antiderivatives.html",
  "type": "Section",
  "number": "1.1",
  "title": "Antiderivatives",
  "body": " Antiderivatives  What is calculus? Below you find a decent, if terse answer.   Calculus is the science of functions   In more detail, calculus investigates and analyzes properties of functions using three fundamental tools: the limit , the derivative , and the integral .    Presumably you are already on intimate terms with the limit and the derivative. In this course we take up the integral in earnest. We begin somewhat indirectly, introducing first the antiderivative and its accompanying indefinite integral notation. Both of these concepts have everything to do with the derivative , and nothing directly to do with the actual definition of the integral ! However, as we will see with the fundamental theorem of calculus , these concepts will play an essential role in computing integrals.   Antiderivative   Let be a function defined on an interval . An antiderivative of on is a function satisfying for all .     Basic antiderivative computations   Find an antiderivative for the given function on the given interval .    ,      ,      ,        We find antiderivatives for each example by inspection . To check that our answer is correct, we simply verify that for each candidate antiderivative we have for all in the given interval . We leave this to you.    is an antiderivative of on .     is an antiderivative of on .  To verify that here it is essential to translate the given radical expressions to power expressions so that we can make use of the power rule. That is, we have and , whence for all .     is an antiderivative of on         Antiderivatives depend on intervals   Let . Show that is an antiderivative of on , but not on . Find an antiderivative of on .    We have for all . Since by definition we have , we see that for all . Thus is an antiderivative of on .  By the same token, since and on , we see that for all , and hence that is not an antiderivative of on .  Lastly, from our analysis above we now see that is an antiderivative of on , since on this interval we have .     Computing antiderivatives by inspection   Given a function and interval , to compute (with justification) an antiderivative of  by inspection , proceed as follows.   Provide a candidate antiderivative .    Verify that is an antiderivative by showing that for all .   This is very much a guess and check procedure. Do not be shy in hazarding a guess for your candidate antiderivative ; even if your check proves the candidate to be incorrect, the very act of checking will often reveal what needs to be adjusted to produce an actual antiderivative.     Less elementary antiderivative computations   Find an antiderivative for the given function on the given interval .    ,      ,      ,        Part of what makes these computations more difficult is that the chain rule inevitably arises when checking our candidate antiderivatives. Since the chain rule plays an important role here, make sure you indicate where it arises in your check.    is an antiderative of on since .     is an antiderivative of since .    Hmmm. This is a curious one. Some typical educated guesses as to what might be ( , or ) all prove incorrect when carefully computing using the chain and\/or product rules. Two natural questions arise: (1) does have an antiderivative?; (2) if it does, how do we write it down? All will be revealed in good time!        General antiderivative formula   Assume is an antiderivative of on the interval .   Given any constant , the function is also an antiderivative of on .    Conversely, if is an antiderivative of on , then there is a constant such that for all .         Let be an antiderivative of on the interval and let be any real constant. We have for all . Thus is an antiderivative for any .    Assume and are antiderivatives of on the interval , and define . We have for all . It follows (as a consequence of the mean value theorem) that is a constant function on . In other words, we have for all . Since , we conclude that for all , as desired.       The two statements of taken together are equivalent to the following: if is an antiderivative of on the interval , then the set of all antiderivatives of on is given by . In other words, once we find one antiderivative of on , we obtain all other antiderivatives of simply by adding an arbitrary constant to .  In particular, note that antiderivatives are not unique! There is no such thing as the antiderivative of a function; if has an antiderivative , then it has infinitely many antiderivatives , where is any real constant.    Leaking water tank   At time minutes a 100 gallon tank of water begins leaking. After minutes, the rate at which the gallon leaks is . Find a formula for , the amount of water in the tank after minutes.    Recall that if , then the function outputs the instantaneous rate of change of with respect to at the given time. Thus in our current setting is the rate of change of the amount of water in the tank at time . We are told that water leaks out of the tank at a rate given by . It follows that . Put another way, is an antiderivative of . An application of yields as an antiderivative of . It follows from that the general antiderivative is of the form . Since is also an antiderivative, we thus have . To determine what the constant is, we use the initial condition  . Using this implies that . We conclude that and thus .     Initial value problem   Consider the differential equation .   Find the general formula for a function satisfying .    Find the unique function satisfying and the initial conditions  .          First, since is an antiderivative of , using and , we conclude that for some . Next, since is an antiderivative of , reasoning as above we have for some . The general formula for is thus given by .    The given initial conditions  and allows us to solve for the and in as follows. First, using we have , which implies . Using this new fact and , now implies , or . We conclude that .        Indefinite integral    Indefinite integral of    If is an antiderivative of on the interval , then by any other antiderivative is of the form for some . We say in this case that the expression is the general antiderivative and denote this using the indefinite integral notation . The symbol is called the integral symbol , the function is called the integrand of the integral, and is called the variable of integration .     It should be noted that the indefinite integral notation is riddled with ambiguity. In particular, whereas the interval of definition plays an important role in the definition of antiderivative (as we saw in ), it does not appear in the notation . So how are we to understand a statement like ? We will take it to mean that on some interval (either implied or given) the function is an antiderivative of , and hence that the general antiderivative formula for on this interval is given by .    Indefinite integral formulas Some of our previous example computations can be summarized by the following indefinite integral formulas. .   Antiderivative formulas   The following antiderivative (or indefinite integral) formulas follow directly from a corresponding derivative formula. The appearing in the formulas below is understood to be any nonzero constant. .     Antiderivative rules   If and are antiderivatives of the functions and , respectively, on the interval , then (1) is an antiderivative of for any , (2) is an antiderivative of , and hence is an antiderivative of for any ,  A somewhat liberal usage of indefinite integral notation allows us to summarize these results as follows.   Scalar rule     Sum rule     Linear combination rule    .    "
},
{
  "id": "mantra_calculus",
  "level": "2",
  "url": "s_antiderivatives.html#mantra_calculus",
  "type": "Dictum",
  "number": "1.1.1",
  "title": "Calculus is the science of functions.",
  "body": " Calculus is the science of functions   In more detail, calculus investigates and analyzes properties of functions using three fundamental tools: the limit , the derivative , and the integral .   "
},
{
  "id": "d_antiderivative",
  "level": "2",
  "url": "s_antiderivatives.html#d_antiderivative",
  "type": "Definition",
  "number": "1.1.2",
  "title": "Antiderivative.",
  "body": " Antiderivative   Let be a function defined on an interval . An antiderivative of on is a function satisfying for all .   "
},
{
  "id": "eg_antiderivatives",
  "level": "2",
  "url": "s_antiderivatives.html#eg_antiderivatives",
  "type": "Example",
  "number": "1.1.3",
  "title": "Basic antiderivative computations.",
  "body": " Basic antiderivative computations   Find an antiderivative for the given function on the given interval .    ,      ,      ,        We find antiderivatives for each example by inspection . To check that our answer is correct, we simply verify that for each candidate antiderivative we have for all in the given interval . We leave this to you.    is an antiderivative of on .     is an antiderivative of on .  To verify that here it is essential to translate the given radical expressions to power expressions so that we can make use of the power rule. That is, we have and , whence for all .     is an antiderivative of on       "
},
{
  "id": "eg_antiderivative_interval",
  "level": "2",
  "url": "s_antiderivatives.html#eg_antiderivative_interval",
  "type": "Example",
  "number": "1.1.4",
  "title": "Antiderivatives depend on intervals.",
  "body": " Antiderivatives depend on intervals   Let . Show that is an antiderivative of on , but not on . Find an antiderivative of on .    We have for all . Since by definition we have , we see that for all . Thus is an antiderivative of on .  By the same token, since and on , we see that for all , and hence that is not an antiderivative of on .  Lastly, from our analysis above we now see that is an antiderivative of on , since on this interval we have .   "
},
{
  "id": "proc_antiderivative_inspection",
  "level": "2",
  "url": "s_antiderivatives.html#proc_antiderivative_inspection",
  "type": "Procedure",
  "number": "1.1.5",
  "title": "Computing antiderivatives by inspection.",
  "body": " Computing antiderivatives by inspection   Given a function and interval , to compute (with justification) an antiderivative of  by inspection , proceed as follows.   Provide a candidate antiderivative .    Verify that is an antiderivative by showing that for all .   This is very much a guess and check procedure. Do not be shy in hazarding a guess for your candidate antiderivative ; even if your check proves the candidate to be incorrect, the very act of checking will often reveal what needs to be adjusted to produce an actual antiderivative.   "
},
{
  "id": "eg_antiderivatives_nonelementary",
  "level": "2",
  "url": "s_antiderivatives.html#eg_antiderivatives_nonelementary",
  "type": "Example",
  "number": "1.1.6",
  "title": "Less elementary antiderivative computations.",
  "body": " Less elementary antiderivative computations   Find an antiderivative for the given function on the given interval .    ,      ,      ,        Part of what makes these computations more difficult is that the chain rule inevitably arises when checking our candidate antiderivatives. Since the chain rule plays an important role here, make sure you indicate where it arises in your check.    is an antiderative of on since .     is an antiderivative of since .    Hmmm. This is a curious one. Some typical educated guesses as to what might be ( , or ) all prove incorrect when carefully computing using the chain and\/or product rules. Two natural questions arise: (1) does have an antiderivative?; (2) if it does, how do we write it down? All will be revealed in good time!      "
},
{
  "id": "th_gen_antiderivative",
  "level": "2",
  "url": "s_antiderivatives.html#th_gen_antiderivative",
  "type": "Theorem",
  "number": "1.1.7",
  "title": "General antiderivative formula.",
  "body": " General antiderivative formula   Assume is an antiderivative of on the interval .   Given any constant , the function is also an antiderivative of on .    Conversely, if is an antiderivative of on , then there is a constant such that for all .         Let be an antiderivative of on the interval and let be any real constant. We have for all . Thus is an antiderivative for any .    Assume and are antiderivatives of on the interval , and define . We have for all . It follows (as a consequence of the mean value theorem) that is a constant function on . In other words, we have for all . Since , we conclude that for all , as desired.     "
},
{
  "id": "rm_antiderivative",
  "level": "2",
  "url": "s_antiderivatives.html#rm_antiderivative",
  "type": "Remark",
  "number": "1.1.8",
  "title": "",
  "body": " The two statements of taken together are equivalent to the following: if is an antiderivative of on the interval , then the set of all antiderivatives of on is given by . In other words, once we find one antiderivative of on , we obtain all other antiderivatives of simply by adding an arbitrary constant to .  In particular, note that antiderivatives are not unique! There is no such thing as the antiderivative of a function; if has an antiderivative , then it has infinitely many antiderivatives , where is any real constant.  "
},
{
  "id": "eg_water_tank",
  "level": "2",
  "url": "s_antiderivatives.html#eg_water_tank",
  "type": "Example",
  "number": "1.1.9",
  "title": "Leaking water tank.",
  "body": " Leaking water tank   At time minutes a 100 gallon tank of water begins leaking. After minutes, the rate at which the gallon leaks is . Find a formula for , the amount of water in the tank after minutes.    Recall that if , then the function outputs the instantaneous rate of change of with respect to at the given time. Thus in our current setting is the rate of change of the amount of water in the tank at time . We are told that water leaks out of the tank at a rate given by . It follows that . Put another way, is an antiderivative of . An application of yields as an antiderivative of . It follows from that the general antiderivative is of the form . Since is also an antiderivative, we thus have . To determine what the constant is, we use the initial condition  . Using this implies that . We conclude that and thus .   "
},
{
  "id": "example-5",
  "level": "2",
  "url": "s_antiderivatives.html#example-5",
  "type": "Example",
  "number": "1.1.10",
  "title": "Initial value problem.",
  "body": " Initial value problem   Consider the differential equation .   Find the general formula for a function satisfying .    Find the unique function satisfying and the initial conditions  .          First, since is an antiderivative of , using and , we conclude that for some . Next, since is an antiderivative of , reasoning as above we have for some . The general formula for is thus given by .    The given initial conditions  and allows us to solve for the and in as follows. First, using we have , which implies . Using this new fact and , now implies , or . We conclude that .      "
},
{
  "id": "d_indefinite_integral",
  "level": "2",
  "url": "s_antiderivatives.html#d_indefinite_integral",
  "type": "Definition",
  "number": "1.1.11",
  "title": "Indefinite integral.",
  "body": " Indefinite integral    Indefinite integral of    If is an antiderivative of on the interval , then by any other antiderivative is of the form for some . We say in this case that the expression is the general antiderivative and denote this using the indefinite integral notation . The symbol is called the integral symbol , the function is called the integrand of the integral, and is called the variable of integration .   "
},
{
  "id": "remark-2",
  "level": "2",
  "url": "s_antiderivatives.html#remark-2",
  "type": "Remark",
  "number": "1.1.12",
  "title": "",
  "body": " It should be noted that the indefinite integral notation is riddled with ambiguity. In particular, whereas the interval of definition plays an important role in the definition of antiderivative (as we saw in ), it does not appear in the notation . So how are we to understand a statement like ? We will take it to mean that on some interval (either implied or given) the function is an antiderivative of , and hence that the general antiderivative formula for on this interval is given by .  "
},
{
  "id": "eg_indefinite_integral",
  "level": "2",
  "url": "s_antiderivatives.html#eg_indefinite_integral",
  "type": "Example",
  "number": "1.1.13",
  "title": "Indefinite integral formulas.",
  "body": " Indefinite integral formulas Some of our previous example computations can be summarized by the following indefinite integral formulas. . "
},
{
  "id": "th_antiderivative_formulas",
  "level": "2",
  "url": "s_antiderivatives.html#th_antiderivative_formulas",
  "type": "Theorem",
  "number": "1.1.14",
  "title": "Antiderivative formulas.",
  "body": " Antiderivative formulas   The following antiderivative (or indefinite integral) formulas follow directly from a corresponding derivative formula. The appearing in the formulas below is understood to be any nonzero constant. .   "
},
{
  "id": "th_antiderivative_rules",
  "level": "2",
  "url": "s_antiderivatives.html#th_antiderivative_rules",
  "type": "Theorem",
  "number": "1.1.15",
  "title": "Antiderivative rules.",
  "body": " Antiderivative rules   If and are antiderivatives of the functions and , respectively, on the interval , then (1) is an antiderivative of for any , (2) is an antiderivative of , and hence is an antiderivative of for any ,  A somewhat liberal usage of indefinite integral notation allows us to summarize these results as follows.   Scalar rule     Sum rule     Linear combination rule    .   "
},
{
  "id": "s_est_area",
  "level": "1",
  "url": "s_est_area.html",
  "type": "Section",
  "number": "1.2",
  "title": "Estimating area",
  "body": " Estimating area  By way of motivation of what will be the definition of the integral, we consider the computational problem of computing the area of a region defined by the graph of a function.   Estimating area  Let be the set of points lying between the graph of and the -axis from to : that is, . We will estimate the area of this region by approximating the region itself with a collection of blocks of equal width, whose heights are determined by the -values of points on the graph of through some means. The GeoGebra interactive below helps illustrate the technique.   GeoGebra: Estimating area with rectangular blocks      Estimating area   Let be a nonnegative function defined on the interval , and let be the graph of from to . To estimate the area between and the -axis proceed as follows:   Divide into equal subintervals, each of width .    For each subinterval pick a sample input  in that interval and build the rectangle whose base is the subinterval and whose sample height is given by . The area of this block is .    Sum together the areas of the blocks constructed in Step 2.     Depending on how the sample inputs are chosen in each subinterval, we get a different estimate. Below you find a number of common methods.   If is chosen as the left (resp. right) endpoint of each subinterval, the estimate is called a left sum estimate (resp. right sum estimate ).    If is chosen as the midpoint of each subinterval, the estimate is called a midpoint sum estimate .    If is chosen so that is the minimum value of on each subinterval, the estimate is called a lower sum estimate .    If is chosen so that is the maximum value of on each subinterval, the estimate is called an upper sum estimate .        Estimating area:   Let , and let be the graph of . Compute the upper and lower area estimates of the region between and the -axis from to by dividing the interval into 4 equal subintervals. Draw block pictures of your estimates on the provided graphs. Explain why the lower estimate is equal to the right estimate, and why the the upper estimate is equal to the left estimate.      As it turns out, upper and lower estimates for this function end up being the same thing as left and right estimates, respectively. This is the case because happens to be a decreasing function on the interval . Thus we can use the GeoGebra interactive in to produce these diagrams and compute the approximations, using the left and right sum options. (Try for yourself!) The upper estimate (which happens to be the left sum estimate) is ; the under estimate, which happens to be the right estimate, is . Observe that the upper estimate is indeed larger than the under estimate, as we expect.     Estimating area:   Let , and let be the graph of . Compute the upper and lower area estimates of the region between and the -axis from to by dividing the interval into 4 equal subintervals. Draw block pictures of your estimates on the provided graphs. \\     First we determine the width of the blocks: since the interval has length , dividing this into four equal lengths yields blocks of width . To pick the heights for each block, we look for the highest (resp., lowest) point in the curve over each base. Here is a diagram of the upper and lower estimates. The corresponding area estimates are computed as follows:      Estimating net change   Suppose physical quantity is a function of an input , and that is the instantaneous rate of change of with respect to .  Suppose we are only given the rate of change function and wish to use this to estimate the net change of from to : that is, we wish to estimate . We can do so using the same method described in .  In this context we interpret a sample value as a constant rate of change over the given subinterval, in which case an individual term in our sum is understood as an estimate of the net change of over the given subinterval, under the simplifying assumption that changes with constant rate of change  over the interval.     Recall that given a function , its instantaneous rate of change with respect to is precisely its derivative . This allows us to interpret as a method of estimating the net change in a function over an interval using information only about its derivative function .    Estimating displacement  Below you find the graph of the velocity (in mph) of a driver heading due east minutes after setting off. Compute an estimate of the area under the graph of between and , and explain what this estimate means physically speaking. Include units!    First we compute an area of the region under the graph using a right sum estimate with four blocks. Here is a diagram corresponding to this estimate procedure. Let be the -th block for each , and let . We compute the areas , and include the units of (mph) and (min) in our computations: Physically speaking, the first area , computes the distance the driver travels eastward, had they driven at a constant speed of mph eastward for the full five minutes. As such, this is an approximation of the total distance the drive traveled during this segment of the drive. Similar interpretations apply to the other blocks: each area can be understood as an approximation of the distance traveled eastward during that segment of the drive. We conclude that the the driver travels approximately in the eastward direction.  Observe that in this example, where velocity is always positive (equivalently, the driver always travels in same direction), distance traveled over any time interval is the same thing as change in position (or displacement ) over that interval. And so total distance traveled is the same thing as total change of position. This is no longer the case if the velocity function can be positive and negative. We will pick this up again later.    "
},
{
  "id": "proj_est_area",
  "level": "2",
  "url": "s_est_area.html#proj_est_area",
  "type": "Interactive example",
  "number": "1.2.1",
  "title": "Estimating area.",
  "body": " Estimating area  Let be the set of points lying between the graph of and the -axis from to : that is, . We will estimate the area of this region by approximating the region itself with a collection of blocks of equal width, whose heights are determined by the -values of points on the graph of through some means. The GeoGebra interactive below helps illustrate the technique.   GeoGebra: Estimating area with rectangular blocks    "
},
{
  "id": "proc_est_area",
  "level": "2",
  "url": "s_est_area.html#proc_est_area",
  "type": "Procedure",
  "number": "1.2.2",
  "title": "Estimating area.",
  "body": " Estimating area   Let be a nonnegative function defined on the interval , and let be the graph of from to . To estimate the area between and the -axis proceed as follows:   Divide into equal subintervals, each of width .    For each subinterval pick a sample input  in that interval and build the rectangle whose base is the subinterval and whose sample height is given by . The area of this block is .    Sum together the areas of the blocks constructed in Step 2.     Depending on how the sample inputs are chosen in each subinterval, we get a different estimate. Below you find a number of common methods.   If is chosen as the left (resp. right) endpoint of each subinterval, the estimate is called a left sum estimate (resp. right sum estimate ).    If is chosen as the midpoint of each subinterval, the estimate is called a midpoint sum estimate .    If is chosen so that is the minimum value of on each subinterval, the estimate is called a lower sum estimate .    If is chosen so that is the maximum value of on each subinterval, the estimate is called an upper sum estimate .      "
},
{
  "id": "eg_area_f",
  "level": "2",
  "url": "s_est_area.html#eg_area_f",
  "type": "Example",
  "number": "1.2.3",
  "title": "Estimating area: <span class=\"process-math\">\\(f(x)=1-x^3\\)<\/span>.",
  "body": " Estimating area:   Let , and let be the graph of . Compute the upper and lower area estimates of the region between and the -axis from to by dividing the interval into 4 equal subintervals. Draw block pictures of your estimates on the provided graphs. Explain why the lower estimate is equal to the right estimate, and why the the upper estimate is equal to the left estimate.      As it turns out, upper and lower estimates for this function end up being the same thing as left and right estimates, respectively. This is the case because happens to be a decreasing function on the interval . Thus we can use the GeoGebra interactive in to produce these diagrams and compute the approximations, using the left and right sum options. (Try for yourself!) The upper estimate (which happens to be the left sum estimate) is ; the under estimate, which happens to be the right estimate, is . Observe that the upper estimate is indeed larger than the under estimate, as we expect.   "
},
{
  "id": "eg_area_g",
  "level": "2",
  "url": "s_est_area.html#eg_area_g",
  "type": "Example",
  "number": "1.2.4",
  "title": "Estimating area: <span class=\"process-math\">\\(f(x)=1-\\abs{x}^3\\)<\/span>.",
  "body": " Estimating area:   Let , and let be the graph of . Compute the upper and lower area estimates of the region between and the -axis from to by dividing the interval into 4 equal subintervals. Draw block pictures of your estimates on the provided graphs. \\     First we determine the width of the blocks: since the interval has length , dividing this into four equal lengths yields blocks of width . To pick the heights for each block, we look for the highest (resp., lowest) point in the curve over each base. Here is a diagram of the upper and lower estimates. The corresponding area estimates are computed as follows:    "
},
{
  "id": "proc_est_net_change",
  "level": "2",
  "url": "s_est_area.html#proc_est_net_change",
  "type": "Procedure",
  "number": "1.2.5",
  "title": "Estimating net change.",
  "body": " Estimating net change   Suppose physical quantity is a function of an input , and that is the instantaneous rate of change of with respect to .  Suppose we are only given the rate of change function and wish to use this to estimate the net change of from to : that is, we wish to estimate . We can do so using the same method described in .  In this context we interpret a sample value as a constant rate of change over the given subinterval, in which case an individual term in our sum is understood as an estimate of the net change of over the given subinterval, under the simplifying assumption that changes with constant rate of change  over the interval.   "
},
{
  "id": "remark-3",
  "level": "2",
  "url": "s_est_area.html#remark-3",
  "type": "Remark",
  "number": "1.2.6",
  "title": "",
  "body": " Recall that given a function , its instantaneous rate of change with respect to is precisely its derivative . This allows us to interpret as a method of estimating the net change in a function over an interval using information only about its derivative function .  "
},
{
  "id": "eg_est_displacement",
  "level": "2",
  "url": "s_est_area.html#eg_est_displacement",
  "type": "Example",
  "number": "1.2.7",
  "title": "Estimating displacement.",
  "body": " Estimating displacement  Below you find the graph of the velocity (in mph) of a driver heading due east minutes after setting off. Compute an estimate of the area under the graph of between and , and explain what this estimate means physically speaking. Include units!    First we compute an area of the region under the graph using a right sum estimate with four blocks. Here is a diagram corresponding to this estimate procedure. Let be the -th block for each , and let . We compute the areas , and include the units of (mph) and (min) in our computations: Physically speaking, the first area , computes the distance the driver travels eastward, had they driven at a constant speed of mph eastward for the full five minutes. As such, this is an approximation of the total distance the drive traveled during this segment of the drive. Similar interpretations apply to the other blocks: each area can be understood as an approximation of the distance traveled eastward during that segment of the drive. We conclude that the the driver travels approximately in the eastward direction.  Observe that in this example, where velocity is always positive (equivalently, the driver always travels in same direction), distance traveled over any time interval is the same thing as change in position (or displacement ) over that interval. And so total distance traveled is the same thing as total change of position. This is no longer the case if the velocity function can be positive and negative. We will pick this up again later.   "
},
{
  "id": "s_riemann_sums",
  "level": "1",
  "url": "s_riemann_sums.html",
  "type": "Section",
  "number": "1.3",
  "title": "Riemann sums",
  "body": " Riemann sums   Sigma notation   Given a sequence of real numbers the sigma notation  denotes the sum of the -th through -th terms of the sequence: that is, . The variable symbol in this notation is called the index of summation ; the letters , , and are customary choices for indices of summation.     Sequence of primes   Let , be the sequence of prime numbers in increasing order: i.e., , , , etc. Compute .    A prime number is a positive integer that has exactly two factors. Here the first six primes: . Thus .     Sinusoidal series   Compute .    Some general advice: if you ever get stumped by a summation problem, expand out the sigma notation as a long sum and see what is revealed.      Summation formulas   Let be a positive integer.    for any .     .     .     .       Perhaps the most common method of showing that the above statements are true is a proof of induction . Unfortunately, we do not have time in this course to cover this proof technique. A detailed description of induction can be found in the proof technique section of my linear algebra textbook ; furthermore a proof of statement (2) of can be found in one of the examples of that section.     Summation rules   Given any sequences and , and any , the following equalities hold.              .    Index shift  For any integer we have .       As with the propositions of this theorem are typically proved using induction.  Informally, statements (1)-(3) follows from some elementary properties of real number arithmetic: namely, commutativity and associativity of addition, and the distributive property.  Statement (4) essentially says that relabeling the indices of the terms in a sum with a shift has no effect on the sum of the terms.     Closed form of summation   Compute using appropriate summation rules and formulas.    We can make short work of this using . .     Riemann sums   Let be a function defined on the interval , and let be a positive integer. A partition of into subintervals is a choice of points satisfying . Given a partition and integer the -th subinterval  is the interval . We denote by the length of the subinterval . Thus we have . The norm of a partition , denoted , is the maximum length of a subinterval: , . Given a choice of sample points (or sample inputs ) for each subinterval, the corresponding Riemann sum of on is . A partition along with a choice of sample points for each is called a pointed partition of . In general we get a different Riemann sum of for each pointed partition of the interval we choose.     Riemann sum types   Let be a function defined on the interval with a chosen partition . Particular rules for picking the sample points for each subinterval in our partition give rise to particular types of Riemann sums. Here are some common examples.   The left Riemann sum is obtained by choosing for all : , is chosen as the left endpoint of each subinterval . The Riemann sum in this case is .    The right Riemann sum is obtained by choosing for all : , is chosen as the right endpoint of each subinterval . The Riemann sum in this case is .    The midpoint Riemann sum is obtained by choosing for all : , is chosen as the midpoint of each subinterval . The Riemann sum in this case is .    The lower Riemann sum is obtained by choosing to be a point where is the minimum value of on for all .    The upper Riemann sum is obtained by choosing to be a point where is the maximum value of on for all .         Let be a positive integer and define to be the right Riemann sum of corresponding to the partition of into equal subintervals.   Derive a closed formula for . Your answer will be expressed in terms of .    Compute .    Now do the same thing with , the left Riemann sum of corresponding to the partion of into equal subintervals.   Hint . For the closed formula of use the index shift identity .          Fix a positive integer . We build the right Riemann sum corresponding to a partition of into subintervals of equal length. We have for all and thus for all . Using we then have . Note that since we have fixed the integer at the beginning of our argument, it is treated throughout as a constant . You can see this in action in the last few lines above.    We have . Hey, is the numeric value we saw our area estimates approaching when working the GeoGebra interactive in !    We include a computation of to illustrate the use of the index shift rule of summation. Most of the ingredients are the same as with the computation for except now we use . . A similar argument as above shows .       "
},
{
  "id": "d_sigma_notation",
  "level": "2",
  "url": "s_riemann_sums.html#d_sigma_notation",
  "type": "Definition",
  "number": "1.3.1",
  "title": "Sigma notation.",
  "body": " Sigma notation   Given a sequence of real numbers the sigma notation  denotes the sum of the -th through -th terms of the sequence: that is, . The variable symbol in this notation is called the index of summation ; the letters , , and are customary choices for indices of summation.   "
},
{
  "id": "eg_seq_primes",
  "level": "2",
  "url": "s_riemann_sums.html#eg_seq_primes",
  "type": "Example",
  "number": "1.3.2",
  "title": "Sequence of primes.",
  "body": " Sequence of primes   Let , be the sequence of prime numbers in increasing order: i.e., , , , etc. Compute .    A prime number is a positive integer that has exactly two factors. Here the first six primes: . Thus .   "
},
{
  "id": "eg_seq_trig",
  "level": "2",
  "url": "s_riemann_sums.html#eg_seq_trig",
  "type": "Example",
  "number": "1.3.3",
  "title": "Sinusoidal series.",
  "body": " Sinusoidal series   Compute .    Some general advice: if you ever get stumped by a summation problem, expand out the sigma notation as a long sum and see what is revealed.    "
},
{
  "id": "th_summ_formulas",
  "level": "2",
  "url": "s_riemann_sums.html#th_summ_formulas",
  "type": "Theorem",
  "number": "1.3.4",
  "title": "Summation formulas.",
  "body": " Summation formulas   Let be a positive integer.    for any .     .     .     .       Perhaps the most common method of showing that the above statements are true is a proof of induction . Unfortunately, we do not have time in this course to cover this proof technique. A detailed description of induction can be found in the proof technique section of my linear algebra textbook ; furthermore a proof of statement (2) of can be found in one of the examples of that section.   "
},
{
  "id": "th_summ_rules",
  "level": "2",
  "url": "s_riemann_sums.html#th_summ_rules",
  "type": "Theorem",
  "number": "1.3.5",
  "title": "Summation rules.",
  "body": " Summation rules   Given any sequences and , and any , the following equalities hold.              .    Index shift  For any integer we have .       As with the propositions of this theorem are typically proved using induction.  Informally, statements (1)-(3) follows from some elementary properties of real number arithmetic: namely, commutativity and associativity of addition, and the distributive property.  Statement (4) essentially says that relabeling the indices of the terms in a sum with a shift has no effect on the sum of the terms.   "
},
{
  "id": "eg_summ_formula",
  "level": "2",
  "url": "s_riemann_sums.html#eg_summ_formula",
  "type": "Example",
  "number": "1.3.6",
  "title": "Closed form of summation.",
  "body": " Closed form of summation   Compute using appropriate summation rules and formulas.    We can make short work of this using . .   "
},
{
  "id": "d_riemann_sum",
  "level": "2",
  "url": "s_riemann_sums.html#d_riemann_sum",
  "type": "Definition",
  "number": "1.3.7",
  "title": "Riemann sums.",
  "body": " Riemann sums   Let be a function defined on the interval , and let be a positive integer. A partition of into subintervals is a choice of points satisfying . Given a partition and integer the -th subinterval  is the interval . We denote by the length of the subinterval . Thus we have . The norm of a partition , denoted , is the maximum length of a subinterval: , . Given a choice of sample points (or sample inputs ) for each subinterval, the corresponding Riemann sum of on is . A partition along with a choice of sample points for each is called a pointed partition of . In general we get a different Riemann sum of for each pointed partition of the interval we choose.   "
},
{
  "id": "d_riemann_sum_types",
  "level": "2",
  "url": "s_riemann_sums.html#d_riemann_sum_types",
  "type": "Definition",
  "number": "1.3.8",
  "title": "Riemann sum types.",
  "body": " Riemann sum types   Let be a function defined on the interval with a chosen partition . Particular rules for picking the sample points for each subinterval in our partition give rise to particular types of Riemann sums. Here are some common examples.   The left Riemann sum is obtained by choosing for all : , is chosen as the left endpoint of each subinterval . The Riemann sum in this case is .    The right Riemann sum is obtained by choosing for all : , is chosen as the right endpoint of each subinterval . The Riemann sum in this case is .    The midpoint Riemann sum is obtained by choosing for all : , is chosen as the midpoint of each subinterval . The Riemann sum in this case is .    The lower Riemann sum is obtained by choosing to be a point where is the minimum value of on for all .    The upper Riemann sum is obtained by choosing to be a point where is the maximum value of on for all .      "
},
{
  "id": "eg_limit_Riemann",
  "level": "2",
  "url": "s_riemann_sums.html#eg_limit_Riemann",
  "type": "Example",
  "number": "1.3.9",
  "title": "",
  "body": "  Let be a positive integer and define to be the right Riemann sum of corresponding to the partition of into equal subintervals.   Derive a closed formula for . Your answer will be expressed in terms of .    Compute .    Now do the same thing with , the left Riemann sum of corresponding to the partion of into equal subintervals.   Hint . For the closed formula of use the index shift identity .          Fix a positive integer . We build the right Riemann sum corresponding to a partition of into subintervals of equal length. We have for all and thus for all . Using we then have . Note that since we have fixed the integer at the beginning of our argument, it is treated throughout as a constant . You can see this in action in the last few lines above.    We have . Hey, is the numeric value we saw our area estimates approaching when working the GeoGebra interactive in !    We include a computation of to illustrate the use of the index shift rule of summation. Most of the ingredients are the same as with the computation for except now we use . . A similar argument as above shows .      "
},
{
  "id": "s_definite_integral",
  "level": "1",
  "url": "s_definite_integral.html",
  "type": "Section",
  "number": "1.4",
  "title": "Definite integral",
  "body": " Definite integral   Definite integral   Let be a function defined on the interval . The definite integral of over , if it exists, is a real number satisfying the following property: for any sequence of pointed partitions of whose norms satisfy , the associated Riemann sums satisfy . In plain English, the definite integral of over is equal to if any sequence of Riemann sums corresponding to a sequence of finer and finer pointed partitions of approaches in the limit.  When this is the case we say is integrable over , and denote the definite integral as .     Limit computation of integral   Assume is integrable on the interval . Since by definition can be computed using any sequence of Riemann sums, for simplicity we will often compute it either as a limit of left or right Riemann sums corresponding to partitions of into equal subintervals. To do so, follow the appropriate steps below for your choice of Riemann sum (left or right).   Partition description  For an equally subdivided partition , all subintervals have common length and we have for all .    Construct Riemann sums  Let and be the left and right Riemann sums, respectively, corresponding to the partition of into equal subintervals. It follows from it follows that     Compute limit  We may now compute the integral as either of the limits below: When computing these limits, it will be convenient to derive a closed form for the -th Riemann sum ( or , depending on your choice.)        Integral of linear function   Let . Compute first as a limit of right Riemann sums, and then as a limit of left Riemann sums.    Following the steps of xr we first assemble ingredients regarding the -th partition of . We have . Using , for any we have Finally, using we compute . The computation using left sums is similar. We include details only of the computation of to illustrate the index shift rule for summations. Using , for any we have . Using reasoning very similar to our previous computation, we then see that . Note how the two approximation techniques (left and right sum) yield the same value in the limit.     Integral of cubic   Let and let be a fixed nonnegative constant. Compute as a limit of right Riemann sums.    We follow the steps . As this example is quite similar to , we omit some details.   Fix . We divide the interval into equal intervals of length . The intervening endpoints of our subintervals are given by .    The -th right Riemann sum corresponding to this partition is given by .    We now compute .       In the previous examples we tacitly assume that the integral in question exists: our solutions did not rule out the possibility that another choice of pointed partitions might yield a sequence of Riemann sums whose limit does not exist, or differs from the limit we computed. In general it can be quite difficulty to decide whether a given function is integrable on a given interval. The next theorem comes to our rescue in this regard.   Integrable functions   Let be a function defined on the interval .   If is continuous on , then is integrable on .    If is continuous everywhere on except for a finite set of jump discontinuities, then is integrable on .       As with the derivative, the integral satisfies many elementary properties that often ease our computations. Technically, the first statements in are in fact definitions. (In our discussion of integrals we tacitly always assumed ; (1) and (2) define what this integral should be if or . ) The rest of the statements, as plausible as they may seem, do require proof. We omit them, but rest assured that the proofs boil down to straightforward statements about Riemann sums and their limits.   Integral properties   Let and be integrable over .    .    Order of integration   .    Sum and difference       Scalar multiple   for any .    Interval partition  For any we have .    Min-max inequality  If satisfies for all , then     Domination  If for all , then .        Integral of cubic (cont.)   Let . Fix constants and with . Use your result in and integral properties to derive a formula for in terms of and .    We saw in that for any we have . It follows that .     Area and signed area of regions defined by functions   Let be integrable over the interval , let be the graph of , and let be the region between and the -axis from to .   Area  The area of , denoted , is defined as .    Signed area  The signed area of , denoted , is defined as .        Signed area  Let be integrable over the interval , let be the graph of , and let be the region between and the -axis from to .   The area of is always nonnegative since .    If for all , then .    If the interval can be paritioned into subintervals on which is either always nonnegative ( ) or nonpositive ( ), then . For example, in diagram below we have .       Signed area of region defined by curve   Signed area of region defined by curve     Integral of linear function (cont.)   Let . Explain why the value of , computed earlier, is consistent with the area interpretation of the integral and known integral formulas.    The region between the graph of and the -axis, from to is a trapezoid of width , and with two heights and . (Sketch it for yourself!) Since the integral of computes . (The last equality uses the area of a trapezoid formula.) This is precisely the value of the integral we computed in .      Let . Fix a constant with , let , and let be the region between the graph of and the -axis from to .   Graph on . Your graph should reflect the assumption that .    Describe precisely how the signed area of is a difference of areas of two distinct regions.    Compute the area of .       In the diagram below we have . Geometrically we have To compute we use the definition of area : .   Region defined by cubic     "
},
{
  "id": "d_definite_integral",
  "level": "2",
  "url": "s_definite_integral.html#d_definite_integral",
  "type": "Definition",
  "number": "1.4.1",
  "title": "Definite integral.",
  "body": " Definite integral   Let be a function defined on the interval . The definite integral of over , if it exists, is a real number satisfying the following property: for any sequence of pointed partitions of whose norms satisfy , the associated Riemann sums satisfy . In plain English, the definite integral of over is equal to if any sequence of Riemann sums corresponding to a sequence of finer and finer pointed partitions of approaches in the limit.  When this is the case we say is integrable over , and denote the definite integral as .   "
},
{
  "id": "proc_limit_integral",
  "level": "2",
  "url": "s_definite_integral.html#proc_limit_integral",
  "type": "Procedure",
  "number": "1.4.2",
  "title": "Limit computation of integral.",
  "body": " Limit computation of integral   Assume is integrable on the interval . Since by definition can be computed using any sequence of Riemann sums, for simplicity we will often compute it either as a limit of left or right Riemann sums corresponding to partitions of into equal subintervals. To do so, follow the appropriate steps below for your choice of Riemann sum (left or right).   Partition description  For an equally subdivided partition , all subintervals have common length and we have for all .    Construct Riemann sums  Let and be the left and right Riemann sums, respectively, corresponding to the partition of into equal subintervals. It follows from it follows that     Compute limit  We may now compute the integral as either of the limits below: When computing these limits, it will be convenient to derive a closed form for the -th Riemann sum ( or , depending on your choice.)      "
},
{
  "id": "eg_int_linear",
  "level": "2",
  "url": "s_definite_integral.html#eg_int_linear",
  "type": "Example",
  "number": "1.4.3",
  "title": "Integral of linear function.",
  "body": " Integral of linear function   Let . Compute first as a limit of right Riemann sums, and then as a limit of left Riemann sums.    Following the steps of xr we first assemble ingredients regarding the -th partition of . We have . Using , for any we have Finally, using we compute . The computation using left sums is similar. We include details only of the computation of to illustrate the index shift rule for summations. Using , for any we have . Using reasoning very similar to our previous computation, we then see that . Note how the two approximation techniques (left and right sum) yield the same value in the limit.   "
},
{
  "id": "eg_int_cubic",
  "level": "2",
  "url": "s_definite_integral.html#eg_int_cubic",
  "type": "Example",
  "number": "1.4.4",
  "title": "Integral of cubic.",
  "body": " Integral of cubic   Let and let be a fixed nonnegative constant. Compute as a limit of right Riemann sums.    We follow the steps . As this example is quite similar to , we omit some details.   Fix . We divide the interval into equal intervals of length . The intervening endpoints of our subintervals are given by .    The -th right Riemann sum corresponding to this partition is given by .    We now compute .      "
},
{
  "id": "th_integrable_functions",
  "level": "2",
  "url": "s_definite_integral.html#th_integrable_functions",
  "type": "Theorem",
  "number": "1.4.5",
  "title": "Integrable functions.",
  "body": " Integrable functions   Let be a function defined on the interval .   If is continuous on , then is integrable on .    If is continuous everywhere on except for a finite set of jump discontinuities, then is integrable on .      "
},
{
  "id": "th_int_props",
  "level": "2",
  "url": "s_definite_integral.html#th_int_props",
  "type": "Theorem",
  "number": "1.4.6",
  "title": "Integral properties.",
  "body": " Integral properties   Let and be integrable over .    .    Order of integration   .    Sum and difference       Scalar multiple   for any .    Interval partition  For any we have .    Min-max inequality  If satisfies for all , then     Domination  If for all , then .      "
},
{
  "id": "eg_int_cubic_cont",
  "level": "2",
  "url": "s_definite_integral.html#eg_int_cubic_cont",
  "type": "Example",
  "number": "1.4.7",
  "title": "Integral of cubic (cont.).",
  "body": " Integral of cubic (cont.)   Let . Fix constants and with . Use your result in and integral properties to derive a formula for in terms of and .    We saw in that for any we have . It follows that .   "
},
{
  "id": "d_signed_area",
  "level": "2",
  "url": "s_definite_integral.html#d_signed_area",
  "type": "Definition",
  "number": "1.4.8",
  "title": "Area and signed area of regions defined by functions.",
  "body": " Area and signed area of regions defined by functions   Let be integrable over the interval , let be the graph of , and let be the region between and the -axis from to .   Area  The area of , denoted , is defined as .    Signed area  The signed area of , denoted , is defined as .      "
},
{
  "id": "rm_signed_area",
  "level": "2",
  "url": "s_definite_integral.html#rm_signed_area",
  "type": "Remark",
  "number": "1.4.9",
  "title": "Signed area.",
  "body": " Signed area  Let be integrable over the interval , let be the graph of , and let be the region between and the -axis from to .   The area of is always nonnegative since .    If for all , then .    If the interval can be paritioned into subintervals on which is either always nonnegative ( ) or nonpositive ( ), then . For example, in diagram below we have .       Signed area of region defined by curve   Signed area of region defined by curve   "
},
{
  "id": "eg_linear_cont",
  "level": "2",
  "url": "s_definite_integral.html#eg_linear_cont",
  "type": "Example",
  "number": "1.4.11",
  "title": "Integral of linear function (cont.).",
  "body": " Integral of linear function (cont.)   Let . Explain why the value of , computed earlier, is consistent with the area interpretation of the integral and known integral formulas.    The region between the graph of and the -axis, from to is a trapezoid of width , and with two heights and . (Sketch it for yourself!) Since the integral of computes . (The last equality uses the area of a trapezoid formula.) This is precisely the value of the integral we computed in .   "
},
{
  "id": "example-18",
  "level": "2",
  "url": "s_definite_integral.html#example-18",
  "type": "Example",
  "number": "1.4.12",
  "title": "",
  "body": "  Let . Fix a constant with , let , and let be the region between the graph of and the -axis from to .   Graph on . Your graph should reflect the assumption that .    Describe precisely how the signed area of is a difference of areas of two distinct regions.    Compute the area of .       In the diagram below we have . Geometrically we have To compute we use the definition of area : .   Region defined by cubic    "
},
{
  "id": "s_FTC",
  "level": "1",
  "url": "s_FTC.html",
  "type": "Section",
  "number": "1.5",
  "title": "Fundamental theorem of calculus",
  "body": " Fundamental theorem of calculus  We have now met the two main operations in calculus: . The fundamental theorem of calculus (FTC) how these two operations (derivative and integral) interact. The theorem has two parts ( and ). We will focus on FTC II in this section, and FTC I in the next.   Fundamental theorem of calculus   Let be continuous on .   FTC I  The function defined on as is differentiable on and satisfies for all .    FTC II  If is an antiderivative of on , then .       Proof of  Since is continuous on it is integrable, and thus we can compute its integral as a limit of Riemann sums corresponding to any sequence of pointed partitions satisfying . The strategy of the proof that follows is to pick these pointed partitions in a very particular way that ensures the value of of the integral we seek.  Let be an antiderivative of on . Since is continuous on , we see that is differentiable on and its derivative is continuous. The mean value theorem thus applies to : given any interval on which is defined and continuous, there is an element such that . We use this fact to produce a sequence of pointed partitions of a very particular sort. Namely for each , we divide into equal subintervals of length , and for each subinterval we choose our sample input to be a point where we have . As discussed above, such a is guaranteed to exist by the mean value theorem. Since by assumption, these sample points satisfy . Note that we have , and thus . It follows that if is the Riemann sum corresponding to the pointed partition , then . We now compute for any fixed : . We've shown that for all . It follows that , as desired.    As mentioned above, we will focus here on . It main computational import of this theorem is that it allows us to compute definite integrals indirectly , by first finding an antiderivative of the integrand, and then using .   Computing integrals with antiderivatives   Let be an integrable function on . To compute using antiderivatives, proceed as follows:   Find an antiderivative of on I.    Use to conclude .        allows us to reduce a definite integral computation essentially to finding an antiderivative of the integrand: , we integrate basically by computing derivatives in reverse . The Augustus De Morgan quote below captures this quite poetically.   Integration is differentiation in reverse    Common integration is only the memory of differentiation --Augustus De Morgan.    Henceforth our integral computations will involve many expressions of the form , which we call a difference evaluation . It will be useful to have some compact notation for this.   Difference evaluation notation   Let be a function containing and in its domain. We define to be the difference evaluation expression .     Difference evaluation notation     It is easy to see that the following difference evaluation identities hold:     Observe that can be expressed using our new notation as .       Computing integrals with antiderivatives   Use the to compute the following definite integrals.              .       Following , for each integral we provide an antiderivative of the integrand and then compute the integral as a difference evaluation using . The integrands in question are familiar and\/or simple enough that we do not justify the fact that is indeed an antiderivative.   The function is an antiderivative of . It follows from that .    The function is an antiderivative of . It follows from that .    The function is an antiderivative of . It follows from that .        Signed area using FTC II   Let , and let be the graph of . For each region compute the area of and the signed area of . Include a diagram of and . Make sure your answer is consistent with your graph. If your answer happens to be 0, use the diagram to explain why.    is the region between and the -axis, from to .     is the region between and the -axis, from to .     is the region between and the -axis, from to .       In each of the cases below we use our definitions of the area and signed area of the region associated to : . Throughout we will use the fact that is an antiderivative of .   We have . Below you find a diagram of described as a union . By the symmetry in the diagram it should come as no surprise that .   Part (a) region     The reasoning and computations here are very similar. We get .    Again, the reasoning and computations are similar. We get . Both the fact that signed area here is zero and the symmetry appearing in the two terms of the area computation arises from the fact that is a union of two symmetric regions.   Signed area over entire period         FTC II: rate of change version   Suppose is a differentiable function on . Since is an antiderivative of on , by we have . Interpreting as a rate of change, we see that integrating the rate of change of a quantity from to yields the net change of as we vary from to .     Leaking water tank revisited  Recall the set up from , where we determined that at time , the amount of water has rate of change .  According to , for any the integral computes the net change in the amount of water in the tank between time and minutes: , it computes . We can use to compute this integral. The function is an antiderivative of and thus . This tells us that at any time . Since , we conclude that , or equivalently, for all . (Here we use the fact that .) We have just given another derivation of the formula for the function .   "
},
{
  "id": "th_FTC",
  "level": "2",
  "url": "s_FTC.html#th_FTC",
  "type": "Theorem",
  "number": "1.5.1",
  "title": "Fundamental theorem of calculus.",
  "body": " Fundamental theorem of calculus   Let be continuous on .   FTC I  The function defined on as is differentiable on and satisfies for all .    FTC II  If is an antiderivative of on , then .       Proof of  Since is continuous on it is integrable, and thus we can compute its integral as a limit of Riemann sums corresponding to any sequence of pointed partitions satisfying . The strategy of the proof that follows is to pick these pointed partitions in a very particular way that ensures the value of of the integral we seek.  Let be an antiderivative of on . Since is continuous on , we see that is differentiable on and its derivative is continuous. The mean value theorem thus applies to : given any interval on which is defined and continuous, there is an element such that . We use this fact to produce a sequence of pointed partitions of a very particular sort. Namely for each , we divide into equal subintervals of length , and for each subinterval we choose our sample input to be a point where we have . As discussed above, such a is guaranteed to exist by the mean value theorem. Since by assumption, these sample points satisfy . Note that we have , and thus . It follows that if is the Riemann sum corresponding to the pointed partition , then . We now compute for any fixed : . We've shown that for all . It follows that , as desired.   "
},
{
  "id": "proc_integral_antiderivative",
  "level": "2",
  "url": "s_FTC.html#proc_integral_antiderivative",
  "type": "Procedure",
  "number": "1.5.2",
  "title": "Computing integrals with antiderivatives.",
  "body": " Computing integrals with antiderivatives   Let be an integrable function on . To compute using antiderivatives, proceed as follows:   Find an antiderivative of on I.    Use to conclude .      "
},
{
  "id": "mantra_integration_differentiation",
  "level": "2",
  "url": "s_FTC.html#mantra_integration_differentiation",
  "type": "Dictum",
  "number": "1.5.3",
  "title": "Integration is differentiation in reverse.",
  "body": " Integration is differentiation in reverse    Common integration is only the memory of differentiation --Augustus De Morgan.   "
},
{
  "id": "d_difference_evaluation",
  "level": "2",
  "url": "s_FTC.html#d_difference_evaluation",
  "type": "Definition",
  "number": "1.5.4",
  "title": "Difference evaluation notation.",
  "body": " Difference evaluation notation   Let be a function containing and in its domain. We define to be the difference evaluation expression .   "
},
{
  "id": "remark-5",
  "level": "2",
  "url": "s_FTC.html#remark-5",
  "type": "Remark",
  "number": "1.5.5",
  "title": "Difference evaluation notation.",
  "body": " Difference evaluation notation     It is easy to see that the following difference evaluation identities hold:     Observe that can be expressed using our new notation as .     "
},
{
  "id": "eg_FTCII",
  "level": "2",
  "url": "s_FTC.html#eg_FTCII",
  "type": "Example",
  "number": "1.5.6",
  "title": "Computing integrals with antiderivatives.",
  "body": " Computing integrals with antiderivatives   Use the to compute the following definite integrals.              .       Following , for each integral we provide an antiderivative of the integrand and then compute the integral as a difference evaluation using . The integrands in question are familiar and\/or simple enough that we do not justify the fact that is indeed an antiderivative.   The function is an antiderivative of . It follows from that .    The function is an antiderivative of . It follows from that .    The function is an antiderivative of . It follows from that .      "
},
{
  "id": "eg_FTCII_area",
  "level": "2",
  "url": "s_FTC.html#eg_FTCII_area",
  "type": "Example",
  "number": "1.5.7",
  "title": "Signed area using FTC II.",
  "body": " Signed area using FTC II   Let , and let be the graph of . For each region compute the area of and the signed area of . Include a diagram of and . Make sure your answer is consistent with your graph. If your answer happens to be 0, use the diagram to explain why.    is the region between and the -axis, from to .     is the region between and the -axis, from to .     is the region between and the -axis, from to .       In each of the cases below we use our definitions of the area and signed area of the region associated to : . Throughout we will use the fact that is an antiderivative of .   We have . Below you find a diagram of described as a union . By the symmetry in the diagram it should come as no surprise that .   Part (a) region     The reasoning and computations here are very similar. We get .    Again, the reasoning and computations are similar. We get . Both the fact that signed area here is zero and the symmetry appearing in the two terms of the area computation arises from the fact that is a union of two symmetric regions.   Signed area over entire period       "
},
{
  "id": "th_FTC_II_rate",
  "level": "2",
  "url": "s_FTC.html#th_FTC_II_rate",
  "type": "Theorem",
  "number": "1.5.8",
  "title": "FTC II: rate of change version.",
  "body": " FTC II: rate of change version   Suppose is a differentiable function on . Since is an antiderivative of on , by we have . Interpreting as a rate of change, we see that integrating the rate of change of a quantity from to yields the net change of as we vary from to .   "
},
{
  "id": "example-21",
  "level": "2",
  "url": "s_FTC.html#example-21",
  "type": "Example",
  "number": "1.5.9",
  "title": "Leaking water tank revisited.",
  "body": " Leaking water tank revisited  Recall the set up from , where we determined that at time , the amount of water has rate of change .  According to , for any the integral computes the net change in the amount of water in the tank between time and minutes: , it computes . We can use to compute this integral. The function is an antiderivative of and thus . This tells us that at any time . Since , we conclude that , or equivalently, for all . (Here we use the fact that .) We have just given another derivation of the formula for the function .  "
},
{
  "id": "s_FTC_cont",
  "level": "1",
  "url": "s_FTC_cont.html",
  "type": "Section",
  "number": "1.6",
  "title": "Fundamental theorem (cont.)",
  "body": " Fundamental theorem (cont.)  In this section we focus on . One peculiarity of this theorem is the function defined as . This is called an integral function , as the values are defined by the integral expression .   Integral function   Let be integrable on the interval . The function defined on as is called an integral function .    Examining the formula , we note that the input of is an the upper limit of integration of the integral. As we vary , the only thing that changes about the integral is the interval over which we are integrating; and this causes the values to vary with . Using the signed area interpretation of the integral allows us to visualize the integral function . In keeping with the notation in , we will label the horizontal axis as the -axis. For any , define to be the region in the plane that lies between the graph of and the -axis, and between the vertical lines and ; as we increase , imagine sliding the vertical line to the right, creating a growing region ; the integral function computes the signed area of this growing region!   Integral function     GeoGebra: understanding integral functions      Integral functions   Let . Make a table of values of for . Explain graphically what is for any .    For any the value is equal to the signed area of the region between the graph of and the horizontal axis from to . In this case, since , the signed area is equal to the area.  Using , and the antiderivative of , we see that . We thus have the following table of values . Note that as . This suggests that the region of all points lying between the graph of and the -axis and to the right of the line has area 1. We'll return to this when we discuss improper integrals .    Now that we have a better grip on integral functions of the form ), let's look at what says about them: namely, that they are differentiable, and satisfy for all . The corollary below follows immediately, answering a question we posed when discussing antiderivatives.   Continuous functions have antiderivatives   If is continuous on the interval , then has an antiderivative on .    Let be the integral function defined as . According to , we have for all .    Let's incorporate the result of into the geometric interpretation of discussed above. Since computes the signed area of the variable region , its derivative computes the rate of change of this signed area with respect to . By , we have . Thus the rate of change of the signed area of at a give point is just , the height of the graph of at .   FTC I: geometric   Let be continuous on the interval and define . In what follows we label the horizontal axis in the plane as the -axis.    For all , let be the region lying between the graph of and the -axis, and between the vertical lines and . We have for all .    At any the rate of change of is given by . In other words, the rate of change of the signed area is equal to the (directed) height of the graph of at .      We can make more interesting integral functions by choosing the upper and\/or lower limit of integration to be a function of . When all the functions are nice enough , we can combine with the chain rule and integral properties to compute the integral function's derivative.   FTC I+chain rule   For each defined below, use along with integral properties and\/or the chain rule to compute .                     The idea for all of these examples is to express the given complicated integral function in terms of simpler integral function to which we can directly apply .   Letting , we have and hence .    Letting , we have and thus     Letting , we have . It follows that        "
},
{
  "id": "d_integral_function",
  "level": "2",
  "url": "s_FTC_cont.html#d_integral_function",
  "type": "Definition",
  "number": "1.6.1",
  "title": "Integral function.",
  "body": " Integral function   Let be integrable on the interval . The function defined on as is called an integral function .   "
},
{
  "id": "proj_integral_function",
  "level": "2",
  "url": "s_FTC_cont.html#proj_integral_function",
  "type": "Interactive example",
  "number": "1.6.1",
  "title": "Integral function.",
  "body": " Integral function     GeoGebra: understanding integral functions    "
},
{
  "id": "example-22",
  "level": "2",
  "url": "s_FTC_cont.html#example-22",
  "type": "Example",
  "number": "1.6.3",
  "title": "Integral functions.",
  "body": " Integral functions   Let . Make a table of values of for . Explain graphically what is for any .    For any the value is equal to the signed area of the region between the graph of and the horizontal axis from to . In this case, since , the signed area is equal to the area.  Using , and the antiderivative of , we see that . We thus have the following table of values . Note that as . This suggests that the region of all points lying between the graph of and the -axis and to the right of the line has area 1. We'll return to this when we discuss improper integrals .   "
},
{
  "id": "cor_FTC_I",
  "level": "2",
  "url": "s_FTC_cont.html#cor_FTC_I",
  "type": "Corollary",
  "number": "1.6.4",
  "title": "Continuous functions have antiderivatives.",
  "body": " Continuous functions have antiderivatives   If is continuous on the interval , then has an antiderivative on .    Let be the integral function defined as . According to , we have for all .   "
},
{
  "id": "th_FTC_I_geometric",
  "level": "2",
  "url": "s_FTC_cont.html#th_FTC_I_geometric",
  "type": "Theorem",
  "number": "1.6.5",
  "title": "FTC I: geometric.",
  "body": " FTC I: geometric   Let be continuous on the interval and define . In what follows we label the horizontal axis in the plane as the -axis.    For all , let be the region lying between the graph of and the -axis, and between the vertical lines and . We have for all .    At any the rate of change of is given by . In other words, the rate of change of the signed area is equal to the (directed) height of the graph of at .     "
},
{
  "id": "eg_FTC_I_chain",
  "level": "2",
  "url": "s_FTC_cont.html#eg_FTC_I_chain",
  "type": "Example",
  "number": "1.6.6",
  "title": "FTC I+chain rule.",
  "body": " FTC I+chain rule   For each defined below, use along with integral properties and\/or the chain rule to compute .                     The idea for all of these examples is to express the given complicated integral function in terms of simpler integral function to which we can directly apply .   Letting , we have and hence .    Letting , we have and thus     Letting , we have . It follows that       "
},
{
  "id": "s_substitution",
  "level": "1",
  "url": "s_substitution.html",
  "type": "Section",
  "number": "1.7",
  "title": "Substitution",
  "body": " Substitution  In the spirit of the De Morgan quote in , running various derivative rules in reverse yields different integration techniques. The substitution theorem is nothing more than the chain rule expressed in terms of antiderivatives.   Substitution   Let be a differentiable function on its domain, and suppose is continuous on the range of . If is an antiderivative of , then is an antiderivative of : , .    Assume is an antiderivative of , so that for all in the domain of . It follows that .     Substitution:straightforward   Use the substitution technique to compute the following indefinite integrals.                         The usefulness of depends on your ability to express the given integrand in the very particular form . This is not always as easy to do as it was in . The substitution procedure facilitates this process, giving it a more algebraic flavor.   Substitution   To compute an indefinite integral using substitution, proceed as follows.   Choose substitution  Choose a differentiable function and write down the two substitution equations .    Transform  Use and algebra to transform the indefinite integral into a new indefinite integral expressed entirely in terms of .    Compute and substitute  Compute , if possible. Substitute for to conclude that .        Substitution procedure   is so algebraic in flavor that we sometimes forget that the chain rule is in play here! It is baked into the transformation step . Using the substitution equations , we see that this equality is really just an algebraic short hand for the equality . Now the substitution theorem tells us that if is an antiderivative of , then is an antiderivative of . This is why our conclusion is valid.    Substitution: less straightforward   Use the substitution technique to compute the following indefinite integrals.                     is a technique for computing antiderivatives. Of course, we can combine this with to obtain a substitution method for definite integrals. In the next section we will provide an alternative, more streamlined approach to computing definite integrals using substitution.   Definite integral substitution: 2-step   To compute a definite integral using substitution, proceed as follows.   Find an antiderivative of using a substitution and .    Use to conclude that .        Definite integral substitution: 2-step technique   Use substitution to compute .        "
},
{
  "id": "th_subst",
  "level": "2",
  "url": "s_substitution.html#th_subst",
  "type": "Theorem",
  "number": "1.7.1",
  "title": "Substitution.",
  "body": " Substitution   Let be a differentiable function on its domain, and suppose is continuous on the range of . If is an antiderivative of , then is an antiderivative of : , .    Assume is an antiderivative of , so that for all in the domain of . It follows that .   "
},
{
  "id": "eg_subst_easy",
  "level": "2",
  "url": "s_substitution.html#eg_subst_easy",
  "type": "Example",
  "number": "1.7.2",
  "title": "Substitution:straightforward.",
  "body": " Substitution:straightforward   Use the substitution technique to compute the following indefinite integrals.                        "
},
{
  "id": "proc_sub",
  "level": "2",
  "url": "s_substitution.html#proc_sub",
  "type": "Procedure",
  "number": "1.7.3",
  "title": "Substitution.",
  "body": " Substitution   To compute an indefinite integral using substitution, proceed as follows.   Choose substitution  Choose a differentiable function and write down the two substitution equations .    Transform  Use and algebra to transform the indefinite integral into a new indefinite integral expressed entirely in terms of .    Compute and substitute  Compute , if possible. Substitute for to conclude that .      "
},
{
  "id": "remark-6",
  "level": "2",
  "url": "s_substitution.html#remark-6",
  "type": "Remark",
  "number": "1.7.4",
  "title": "Substitution procedure.",
  "body": " Substitution procedure   is so algebraic in flavor that we sometimes forget that the chain rule is in play here! It is baked into the transformation step . Using the substitution equations , we see that this equality is really just an algebraic short hand for the equality . Now the substitution theorem tells us that if is an antiderivative of , then is an antiderivative of . This is why our conclusion is valid.  "
},
{
  "id": "example-25",
  "level": "2",
  "url": "s_substitution.html#example-25",
  "type": "Example",
  "number": "1.7.5",
  "title": "Substitution: less straightforward.",
  "body": " Substitution: less straightforward   Use the substitution technique to compute the following indefinite integrals.                   "
},
{
  "id": "proc_sub_2step",
  "level": "2",
  "url": "s_substitution.html#proc_sub_2step",
  "type": "Procedure",
  "number": "1.7.6",
  "title": "Definite integral substitution: 2-step.",
  "body": " Definite integral substitution: 2-step   To compute a definite integral using substitution, proceed as follows.   Find an antiderivative of using a substitution and .    Use to conclude that .      "
},
{
  "id": "example-26",
  "level": "2",
  "url": "s_substitution.html#example-26",
  "type": "Example",
  "number": "1.7.7",
  "title": "Definite integral substitution: 2-step technique.",
  "body": " Definite integral substitution: 2-step technique   Use substitution to compute .       "
},
{
  "id": "s_subst_cont",
  "level": "1",
  "url": "s_subst_cont.html",
  "type": "Section",
  "number": "1.8",
  "title": "More substitution; area between curves",
  "body": " More substitution; area between curves  Before discussing the area of a region lying between two curves, we provide an alternative method to for definite integral substitution. We encourage you to try your hand at both methods; you may find that different circumstances will make one method more convenient than the other.   Definite integral substitution: streamlined   To compute the definite integral using the streamlined substitution method, proceed as follows.   Choose substitution  Choose a differentiable function and write down the two substitution equations .    Transform  Use and algebra to transform the integral of over into an integral of a function over the interval : , .    Compute  Compute .        Definite integral substitution: streamlined    Use streamlined substitution technique to compute the following integrals.                      Area between curves: functions of   Suppose for all . Let be the region between the graph of and the graph of , and between the vertical lines and : , . We define the area of to be the integral of over : , .     Area between curves: functions of   Suppose and are two functions of satisfying for all . Let be the region between the graph of and the graph of , and between the horizontal lines and : , . We define the area of to be the integral of over : i.e., .     Area between curves: why ?  Suppose for all . Let be the graph of , let be the graph of , and be the region between and over the interval on the -axis.   Suppose we also have for all . Then we have , where is the region lying between and the -axis over the interval . Intuitively, this difference of areas should indeed be the area between the two curves.    To reduce the general case to the case above, simply shift both functions (and hence also ) up by a large enough constant so that . This operation does not affect the area of , and the gets canceled in the integral computation thanks to the difference operator!       Area between parabola and line   Let be the region between the parabola and the line lying in the first quadrant. Compute the are of . You may do this either by thinking of the curves as graphs of functions of , or graphs of functions of . Which approach is easier?         Area of region between intertwined curves   Suppose and are continuous on the interval and intersect one another finitely many times. Let be the region between the graphs of and , and between the vertical lines and . To compute the area of , proceed as follows:   Partition into subintervals over which one of the functions is always greater than or equal to the other.    On each such subinterval compute the area of the corresponding region by applying . Make sure to integrate the appropriate difference of functions.    Sum up the areas you compute in Step 2.        Area between paraboloas   Compute the area of the region between the parabolas and lying within the lines and .        "
},
{
  "id": "proc_sub_streamlined",
  "level": "2",
  "url": "s_subst_cont.html#proc_sub_streamlined",
  "type": "Procedure",
  "number": "1.8.1",
  "title": "Definite integral substitution: streamlined.",
  "body": " Definite integral substitution: streamlined   To compute the definite integral using the streamlined substitution method, proceed as follows.   Choose substitution  Choose a differentiable function and write down the two substitution equations .    Transform  Use and algebra to transform the integral of over into an integral of a function over the interval : , .    Compute  Compute .      "
},
{
  "id": "example-27",
  "level": "2",
  "url": "s_subst_cont.html#example-27",
  "type": "Example",
  "number": "1.8.2",
  "title": "Definite integral substitution: streamlined.",
  "body": " Definite integral substitution: streamlined    Use streamlined substitution technique to compute the following integrals.                    "
},
{
  "id": "d_area_between_curves_x",
  "level": "2",
  "url": "s_subst_cont.html#d_area_between_curves_x",
  "type": "Definition",
  "number": "1.8.3",
  "title": "Area between curves: functions of <span class=\"process-math\">\\(x\\)<\/span>.",
  "body": " Area between curves: functions of   Suppose for all . Let be the region between the graph of and the graph of , and between the vertical lines and : , . We define the area of to be the integral of over : , .   "
},
{
  "id": "d_area_between_curves_y",
  "level": "2",
  "url": "s_subst_cont.html#d_area_between_curves_y",
  "type": "Definition",
  "number": "1.8.4",
  "title": "Area between curves: functions of <span class=\"process-math\">\\(y\\)<\/span>.",
  "body": " Area between curves: functions of   Suppose and are two functions of satisfying for all . Let be the region between the graph of and the graph of , and between the horizontal lines and : , . We define the area of to be the integral of over : i.e., .   "
},
{
  "id": "remark-7",
  "level": "2",
  "url": "s_subst_cont.html#remark-7",
  "type": "Remark",
  "number": "1.8.5",
  "title": "Area between curves: why <span class=\"process-math\">\\(f-g\\text{?}\\)<\/span>",
  "body": " Area between curves: why ?  Suppose for all . Let be the graph of , let be the graph of , and be the region between and over the interval on the -axis.   Suppose we also have for all . Then we have , where is the region lying between and the -axis over the interval . Intuitively, this difference of areas should indeed be the area between the two curves.    To reduce the general case to the case above, simply shift both functions (and hence also ) up by a large enough constant so that . This operation does not affect the area of , and the gets canceled in the integral computation thanks to the difference operator!     "
},
{
  "id": "example-28",
  "level": "2",
  "url": "s_subst_cont.html#example-28",
  "type": "Example",
  "number": "1.8.6",
  "title": "Area between parabola and line.",
  "body": " Area between parabola and line   Let be the region between the parabola and the line lying in the first quadrant. Compute the are of . You may do this either by thinking of the curves as graphs of functions of , or graphs of functions of . Which approach is easier?       "
},
{
  "id": "proc_area_curves",
  "level": "2",
  "url": "s_subst_cont.html#proc_area_curves",
  "type": "Procedure",
  "number": "1.8.7",
  "title": "Area of region between intertwined curves.",
  "body": " Area of region between intertwined curves   Suppose and are continuous on the interval and intersect one another finitely many times. Let be the region between the graphs of and , and between the vertical lines and . To compute the area of , proceed as follows:   Partition into subintervals over which one of the functions is always greater than or equal to the other.    On each such subinterval compute the area of the corresponding region by applying . Make sure to integrate the appropriate difference of functions.    Sum up the areas you compute in Step 2.      "
},
{
  "id": "example-29",
  "level": "2",
  "url": "s_subst_cont.html#example-29",
  "type": "Example",
  "number": "1.8.8",
  "title": "Area between paraboloas.",
  "body": " Area between paraboloas   Compute the area of the region between the parabolas and lying within the lines and .       "
},
{
  "id": "s_volume",
  "level": "1",
  "url": "s_volume.html",
  "type": "Section",
  "number": "1.9",
  "title": "Volume via cross sections",
  "body": " Volume via cross sections  In our discussion of area of regions in , we started with basic area formulas (rectangles) and investigated how we could use these basic formulas to estimate the area of more general regions via Riemann sums. This in turn motivated our definition of our area via the integral, which we understood as the limit of these estimates as they get more and more accurate. In the end we used the integral to produce a more general notion of area that could be applied to more interesting regions.  We will now take a similar approach to defining the volume of a solid region in three-space. The rough outline of our approach is meant to bring out the similarities between the two approaches.   Begin with a set of basic volume formulas assumed to be true. We will start with the volume formula for a solid cylinder of general base of area , and height .    Estimate the volume of a general region by approximating it as a union of such general cylinders and summing up their volumes.    Define the volume of the region to be the limit of these estimates and identify this limit as the integral of a certain function.   In more detail, imagine our solid lying in and choose a coordinate system with the -axis running through . Imagine slicing up with many vertical planes oriented perpendicularly to the -axis. Assume the solid lies entirely between the planes and .   For any fixed , the vertical plane intersected with yields a cross section  of that we call the -cross section.   A cross section of the solid     We approximate the portion of located between two planes planes and as a general cylinder with base and height . Let . The volume of this cylinder is given by , and we consider this an approximation of the volume of this portion of .   Volume of general cylinder     Recall that lies entirely between the planes and . To estimate the volume of we partition into equal subintervals and approximate the volume of the portion of between and as , as above. The sum of these approximations yields an approximation of the volume of : . We recognize this expression as the -th left Riemann summ of the cross section area function on the interval .    Taking the limit of these approximations as should yield the exact volume of . Thus we define .      Volume via cross sections   Let be a solid region in -space lying between the planes and . For each let be the corresponding -cross section of and let be the area of .  Assume is integrable on the interval . We define the volume  of as . The volume of can be defined with respect to any linear axis ( , the - or -axis) using an analogous formula to .     Volume of sphere   Let be the solid sphere centered at the origin of radius . Compute using cross sections.         Volume of cone   Let be the solid cone with base the disc in the -plane with equation and vertex lying directly above the origin at a height of . Compute using cross sections.         is quite general: it can be applied to any solid region with an integrable cross sectional area function . For the remainder of the section, we continue a very special type of solid: namely a solid of rotation .   Solid of revolution   A solid of revolution is a solid region obtained by rotating a planar region around a central linear axis .    Solids of revolution are a very particular sort of solid regions, and enjoy many symmetry properties. When computing their volumes with respect to their axis of symmetry, cross sections are often disks or washers , and thus the area cross section function takes a particular form. The following procedure considers two typical cases; it can be applied mutatis mutandi to solids or revolution with axis of rotation parallel to the - or -axis.   Volume of solid of revolution   In each case below, let be the solid of revolution obtained by rotating the given region around the given line .   Disks  Let be the line , and let be an integrable function on the interval satisfying for all . Define to be the region in the -plane lying between the graph of and , and between the lines and .   For all the cross section is a disk of radius .    The cross sectional area function of is thus given by .    The volume of is thus .       Washers  Let be the line , and let and be integrable functions on the interval satisfying for all . Define to be the region in the -plane lying between the graphs of and , and between the lines and .   For all the cross section of is a washer of inner radius and outer radius .    The cross sectional area function of is thus given by .    The volume of is .           Disc example   Let , let be the region in the first quadrant lying below the graph of and above the line with equation , and let be the solid obtained by rotating about .    Compute .    Sketch the solid . How else could we have computed the volume in (a)?           Washer example   Let be the region enclosed by the line and the parabola , and let be the solid obtained revolving about the -axis. Sketch and compute the volume of .        "
},
{
  "id": "d_volume",
  "level": "2",
  "url": "s_volume.html#d_volume",
  "type": "Definition",
  "number": "1.9.1",
  "title": "Volume via cross sections.",
  "body": " Volume via cross sections   Let be a solid region in -space lying between the planes and . For each let be the corresponding -cross section of and let be the area of .  Assume is integrable on the interval . We define the volume  of as . The volume of can be defined with respect to any linear axis ( , the - or -axis) using an analogous formula to .   "
},
{
  "id": "eg_sphere",
  "level": "2",
  "url": "s_volume.html#eg_sphere",
  "type": "Example",
  "number": "1.9.2",
  "title": "Volume of sphere.",
  "body": " Volume of sphere   Let be the solid sphere centered at the origin of radius . Compute using cross sections.       "
},
{
  "id": "eg_cone",
  "level": "2",
  "url": "s_volume.html#eg_cone",
  "type": "Example",
  "number": "1.9.3",
  "title": "Volume of cone.",
  "body": " Volume of cone   Let be the solid cone with base the disc in the -plane with equation and vertex lying directly above the origin at a height of . Compute using cross sections.       "
},
{
  "id": "d_solid_of_rotation",
  "level": "2",
  "url": "s_volume.html#d_solid_of_rotation",
  "type": "Definition",
  "number": "1.9.4",
  "title": "Solid of revolution.",
  "body": " Solid of revolution   A solid of revolution is a solid region obtained by rotating a planar region around a central linear axis .   "
},
{
  "id": "proc_solid_revolution",
  "level": "2",
  "url": "s_volume.html#proc_solid_revolution",
  "type": "Procedure",
  "number": "1.9.5",
  "title": "Volume of solid of revolution.",
  "body": " Volume of solid of revolution   In each case below, let be the solid of revolution obtained by rotating the given region around the given line .   Disks  Let be the line , and let be an integrable function on the interval satisfying for all . Define to be the region in the -plane lying between the graph of and , and between the lines and .   For all the cross section is a disk of radius .    The cross sectional area function of is thus given by .    The volume of is thus .       Washers  Let be the line , and let and be integrable functions on the interval satisfying for all . Define to be the region in the -plane lying between the graphs of and , and between the lines and .   For all the cross section of is a washer of inner radius and outer radius .    The cross sectional area function of is thus given by .    The volume of is .         "
},
{
  "id": "eg_disc",
  "level": "2",
  "url": "s_volume.html#eg_disc",
  "type": "Example",
  "number": "1.9.6",
  "title": "Disc example.",
  "body": " Disc example   Let , let be the region in the first quadrant lying below the graph of and above the line with equation , and let be the solid obtained by rotating about .    Compute .    Sketch the solid . How else could we have computed the volume in (a)?         "
},
{
  "id": "eg_washer",
  "level": "2",
  "url": "s_volume.html#eg_washer",
  "type": "Example",
  "number": "1.9.7",
  "title": "Washer example.",
  "body": " Washer example   Let be the region enclosed by the line and the parabola , and let be the solid obtained revolving about the -axis. Sketch and compute the volume of .       "
},
{
  "id": "appendix-notation",
  "level": "1",
  "url": "appendix-notation.html",
  "type": "Appendix",
  "number": "A",
  "title": "Notation",
  "body": " Notation   "
},
{
  "id": "appendix-defs",
  "level": "1",
  "url": "appendix-defs.html",
  "type": "Appendix",
  "number": "B",
  "title": "Definitions",
  "body": " Definitions   "
},
{
  "id": "appendix-procs",
  "level": "1",
  "url": "appendix-procs.html",
  "type": "Appendix",
  "number": "C",
  "title": "Procedures",
  "body": " Procedures   "
},
{
  "id": "appendix-thms",
  "level": "1",
  "url": "appendix-thms.html",
  "type": "Appendix",
  "number": "D",
  "title": "Theory",
  "body": " Theory   "
},
{
  "id": "appendix-egs",
  "level": "1",
  "url": "appendix-egs.html",
  "type": "Appendix",
  "number": "E",
  "title": "Examples",
  "body": " Examples   "
},
{
  "id": "appendix-interactives",
  "level": "1",
  "url": "appendix-interactives.html",
  "type": "Appendix",
  "number": "F",
  "title": "Interactives and computational cells",
  "body": " Interactives and computational cells   "
},
{
  "id": "appendix-dicta",
  "level": "1",
  "url": "appendix-dicta.html",
  "type": "Appendix",
  "number": "G",
  "title": "Dicta, fiats, etc.",
  "body": " Dicta, fiats,   "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
