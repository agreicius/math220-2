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
  "body": " Substitution  In the spirit of the De Morgan quote in , running various derivative rules in reverse yields different integration techniques. The substitution theorem is nothing more than the chain rule expressed in terms of antiderivatives.   Substitution   Let be a differentiable function on its domain, and suppose is continuous on the range of . If is an antiderivative of , then is an antiderivative of : , .    Assume is an antiderivative of , so that for all in the domain of . It follows that .     Substitution:straightforward   Use the substitution technique to compute the following indefinite integrals.                        We have where and . Since is an antiderivative of , tells us that is an antiderivative of . We conclude .    We have where and . Since is an antiderivative of , tells us that is an antiderivative of . We conclude .    A similar approach as above can be applied, though here we have , where and . It follows that , since is an antiderivative of .       The usefulness of depends on your ability to express the given integrand in the very particular form . This is not always as easy to do as it was in . The substitution procedure facilitates this process, giving it a more algebraic flavor.   Substitution   To compute an indefinite integral using substitution, proceed as follows.   Choose substitution  Choose a differentiable function and write down the two substitution equations .    Transform  Use and algebra to transform the indefinite integral into a new indefinite integral expressed entirely in terms of .    Compute and substitute  Compute , if possible. Substitute for to conclude that .        Substitution procedure   is so algebraic in flavor that we sometimes forget that the chain rule is in play here! It is baked into the transformation step . Using the substitution equations , we see that this equality is really just an algebraic short hand for the equality . Now the substitution theorem tells us that if is an antiderivative of , then is an antiderivative of . This is why our conclusion is valid.    Substitution: less straightforward   Use the substitution technique to compute the following indefinite integrals.                   We choose the substitution Equation implies . Transforming the integral, we get .    We choose the substitution Equation implies . By , we have . Thus . Transforming the integral, we get .        is a technique for computing antiderivatives. Of course, we can combine this with to obtain a substitution method for definite integrals. In the next section we will provide an alternative, more streamlined approach to computing definite integrals using substitution.   Definite integral substitution: 2-step   To compute a definite integral using substitution, proceed as follows.   Find an antiderivative of using a substitution and .    Use to conclude that .        Definite integral substitution: 2-step technique   Use substitution to compute .    We saw in that an antiderivative of the given integrand is . We conclude using that .    "
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
  "body": " Substitution:straightforward   Use the substitution technique to compute the following indefinite integrals.                        We have where and . Since is an antiderivative of , tells us that is an antiderivative of . We conclude .    We have where and . Since is an antiderivative of , tells us that is an antiderivative of . We conclude .    A similar approach as above can be applied, though here we have , where and . It follows that , since is an antiderivative of .      "
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
  "id": "eg_subst_hard",
  "level": "2",
  "url": "s_substitution.html#eg_subst_hard",
  "type": "Example",
  "number": "1.7.5",
  "title": "Substitution: less straightforward.",
  "body": " Substitution: less straightforward   Use the substitution technique to compute the following indefinite integrals.                   We choose the substitution Equation implies . Transforming the integral, we get .    We choose the substitution Equation implies . By , we have . Thus . Transforming the integral, we get .      "
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
  "body": " Definite integral substitution: 2-step technique   Use substitution to compute .    We saw in that an antiderivative of the given integrand is . We conclude using that .   "
},
{
  "id": "s_subst_cont",
  "level": "1",
  "url": "s_subst_cont.html",
  "type": "Section",
  "number": "1.8",
  "title": "More substitution; area between curves",
  "body": " More substitution; area between curves  Before discussing the area of a region lying between two curves, we provide an alternative method to for definite integral substitution. We encourage you to try your hand at both methods; you may find that different circumstances will make one method more convenient than the other.   Definite integral substitution: streamlined   To compute the definite integral using the streamlined substitution method, proceed as follows.   Choose substitution  Choose a differentiable function and write down the two substitution equations .    Transform  Use and algebra to transform the integral of over into an integral of a function over the interval : , .    Compute  Compute .        Definite integral substitution: streamlined    Use streamlined substitution technique to compute the following integrals.                    Using the substitution , the streamlined technique yields .    Before substituting, we do a bit of algebra: . This suggests the substitution . To transform the given integral in terms of , we further observe that . Now using the streamlined method, we have .        Area between curves: functions of   Suppose for all . Let be the region between the graph of and the graph of , and between the vertical lines and : , . We define the area of to be the integral of over : , .     Area between curves: functions of   Suppose and are two functions of satisfying for all . Let be the region between the graph of and the graph of , and between the horizontal lines and : , . We define the area of to be the integral of over : i.e., .     Area between curves: why ?  Suppose for all . Let be the graph of , let be the graph of , and be the region between and over the interval on the -axis.   Suppose we also have for all . Then we have , where is the region lying between and the -axis over the interval .   Area as difference of two areas     To reduce the general case to the case above, simply shift both functions (and hence also ) up by a large enough constant so that . This operation does not affect the area of , and the gets canceled in the integral computation thanks to the difference operator!   Shifting the region up        Area between parabola and line   Let be the region between the parabola and the line lying in the first quadrant. Compute the are of . You may do this either by thinking of the curves as graphs of functions of , or graphs of functions of . Which approach is easier?    Below you find a diagram of . The setup lends itself to a treatment in terms of in part because for both equations defining the curves we can solve for easily in terms of . The region is naturally described as the points lying between the curves and between the lines and . Since for all we may use the area formula to compute .   Region between parabola and line       Area of region between intertwined curves   Suppose and are continuous on the interval and intersect one another finitely many times. Let be the region between the graphs of and , and between the vertical lines and . To compute the area of , proceed as follows:   Partition into subintervals over which one of the functions is always greater than or equal to the other.    On each such subinterval compute the area of the corresponding region by applying . Make sure to integrate the appropriate difference of functions.    Sum up the areas you compute in Step 2.        Area between parabolas   Compute the area of the region between the parabolas and lying within the lines and .    In the diagram below the region is described as a union of three regions , each of whose area can be computed with the area formula. We conclude .   Region between two parabolas        "
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
  "body": " Definite integral substitution: streamlined    Use streamlined substitution technique to compute the following integrals.                    Using the substitution , the streamlined technique yields .    Before substituting, we do a bit of algebra: . This suggests the substitution . To transform the given integral in terms of , we further observe that . Now using the streamlined method, we have .      "
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
  "body": " Area between curves: why ?  Suppose for all . Let be the graph of , let be the graph of , and be the region between and over the interval on the -axis.   Suppose we also have for all . Then we have , where is the region lying between and the -axis over the interval .   Area as difference of two areas     To reduce the general case to the case above, simply shift both functions (and hence also ) up by a large enough constant so that . This operation does not affect the area of , and the gets canceled in the integral computation thanks to the difference operator!   Shifting the region up      "
},
{
  "id": "example-28",
  "level": "2",
  "url": "s_subst_cont.html#example-28",
  "type": "Example",
  "number": "1.8.6",
  "title": "Area between parabola and line.",
  "body": " Area between parabola and line   Let be the region between the parabola and the line lying in the first quadrant. Compute the are of . You may do this either by thinking of the curves as graphs of functions of , or graphs of functions of . Which approach is easier?    Below you find a diagram of . The setup lends itself to a treatment in terms of in part because for both equations defining the curves we can solve for easily in terms of . The region is naturally described as the points lying between the curves and between the lines and . Since for all we may use the area formula to compute .   Region between parabola and line     "
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
  "title": "Area between parabolas.",
  "body": " Area between parabolas   Compute the area of the region between the parabolas and lying within the lines and .    In the diagram below the region is described as a union of three regions , each of whose area can be computed with the area formula. We conclude .   Region between two parabolas       "
},
{
  "id": "s_volume",
  "level": "1",
  "url": "s_volume.html",
  "type": "Section",
  "number": "1.9",
  "title": "Volume via cross sections",
  "body": " Volume via cross sections  In our discussion of area of regions in , we started with basic area formulas (rectangles) and investigated how we could use these basic formulas to estimate the area of more general regions via Riemann sums. This in turn motivated our definition of our area via the integral, which we understood as the limit of these estimates as they get more and more accurate. In the end we used the integral to produce a more general notion of area that could be applied to more interesting regions.  We will now take a similar approach to defining the volume of a solid region in three-space. The rough outline of our approach is meant to bring out the similarities between the two approaches.   Begin with a set of basic volume formulas assumed to be true. We will start with the volume formula for a solid cylinder of general base of area , and height .    Estimate the volume of a general region by approximating it as a union of such general cylinders and summing up their volumes.    Define the volume of the region to be the limit of these estimates and identify this limit as the integral of a certain function.   In more detail, imagine our solid lying in and choose a coordinate system with the -axis running through . Imagine slicing up with many vertical planes oriented perpendicularly to the -axis. Assume the solid lies entirely between the planes and .   For any fixed , the vertical plane intersected with yields a cross section  of that we call the -cross section.   A cross section of the solid     We approximate the portion of located between two planes planes and as a general cylinder with base and height . Let . The volume of this cylinder is given by , and we consider this an approximation of the volume of this portion of .   Volume of general cylinder     Recall that lies entirely between the planes and . To estimate the volume of we partition into equal subintervals and approximate the volume of the portion of between and as , as above. The sum of these approximations yields an approximation of the volume of : . We recognize this expression as the -th left Riemann summ of the cross section area function on the interval .    Taking the limit of these approximations as should yield the exact volume of . Thus we define .      Volume via cross sections   Let be a solid region in -space lying between the planes and . For each let be the corresponding -cross section of and let be the area of .  Assume is integrable on the interval . We define the volume  of as . The volume of can be defined with respect to any linear axis ( , the - or -axis) using an analogous formula to .     Volume via cross sections   To compute the volume of a solid region via -cross sections, proceed as follows:   Sketch along with a typical cross section .    Derive a formula for in terms of .    Determine the appropriate limits of integration: and .    Compute .        Volume of sphere   Let be the solid sphere centered at the origin of radius . Compute using cross sections.    As the diagram below illustrates, each -cross section of the sphere is a circle of radius . Thus and as expected!   Volume of sphere      Volume of cone   Let be the solid cone with base the disc in the -plane with equation and vertex lying directly above the origin at a height of . Compute using cross sections.    Picking out two similar right triangles in the diagram below, we see that each -cross section of the cone is a circle of radius satisfying , or . Thus and . Note that the volume of the cone is equal to one-third the volume of the cylinder of radius and height !   Volume of cone      is quite general: it can be applied to any solid region with an integrable cross sectional area function . For the remainder of the section, we consider a very special type of solid: namely a solid of rotation .   Solid of revolution   A solid of revolution is a solid region obtained by rotating a planar region around a central linear axis .    Solids of revolution are a very particular sort of solid region, and enjoy many symmetry properties. When computing their volumes with respect to their axis of symmetry, cross sections are often disks or washers , and thus the area cross section function takes a particular form. The following procedure considers two typical cases; it can be applied mutatis mutandi to solids or revolution with axis of rotation parallel to the - or -axis.   Volume of solid of revolution   In each case below, let be the solid of revolution obtained by rotating the given region around the given line .   Disks  Let be the line , and let be an integrable function on the interval satisfying for all . Define to be the region in the -plane lying between the graph of and , and between the lines and .   For all the cross section is a disk of radius .    The cross sectional area function of is thus given by .    The volume of is thus .       Washers  Let be the line , and let and be integrable functions on the interval satisfying for all . Define to be the region in the -plane lying between the graphs of and , and between the lines and .   For all the cross section of is a washer of inner radius and outer radius .    The cross sectional area function of is thus given by .    The volume of is .           Disk example   Let , let be the region in the first quadrant lying below the graph of and above the line with equation , and let be the solid obtained by rotating about .    Compute .    Sketch the solid . How else could we have computed the volume in (a)?      As the diagram below indicates, when rotating the given region about the line , we get cross sections that are discs of radius . Using the disc formula, we conclude that . Alternatively, we observe that the solid of revolution in this case is just a cone of radius and height 7. From we conclude that .   Disk diagram       Washer example   Let be the region enclosed by the line and the parabola , and let be the solid obtained revolving about the -axis. Sketch and compute the volume of .    The two curves have equations and . We find the points of intersection of these two curves by solving the corresponding system of two equations for and . Setting , we see that . Solving this quadratic yields or . The two points of intersection are thus and . It follows that the region is the set of points lying between the curves and , and the horizontal lines and .  As indicated in the diagram below, the general -cross section of this solid will be a washer of outer radius and inner radius . (The in is equal to 0 in this example.) We conclude that , after some elementary, if tedious integration.   Washer diagram     "
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
  "id": "proc_volume",
  "level": "2",
  "url": "s_volume.html#proc_volume",
  "type": "Procedure",
  "number": "1.9.2",
  "title": "Volume via cross sections.",
  "body": " Volume via cross sections   To compute the volume of a solid region via -cross sections, proceed as follows:   Sketch along with a typical cross section .    Derive a formula for in terms of .    Determine the appropriate limits of integration: and .    Compute .      "
},
{
  "id": "eg_sphere",
  "level": "2",
  "url": "s_volume.html#eg_sphere",
  "type": "Example",
  "number": "1.9.3",
  "title": "Volume of sphere.",
  "body": " Volume of sphere   Let be the solid sphere centered at the origin of radius . Compute using cross sections.    As the diagram below illustrates, each -cross section of the sphere is a circle of radius . Thus and as expected!   Volume of sphere    "
},
{
  "id": "eg_cone",
  "level": "2",
  "url": "s_volume.html#eg_cone",
  "type": "Example",
  "number": "1.9.4",
  "title": "Volume of cone.",
  "body": " Volume of cone   Let be the solid cone with base the disc in the -plane with equation and vertex lying directly above the origin at a height of . Compute using cross sections.    Picking out two similar right triangles in the diagram below, we see that each -cross section of the cone is a circle of radius satisfying , or . Thus and . Note that the volume of the cone is equal to one-third the volume of the cylinder of radius and height !   Volume of cone    "
},
{
  "id": "d_solid_of_rotation",
  "level": "2",
  "url": "s_volume.html#d_solid_of_rotation",
  "type": "Definition",
  "number": "1.9.5",
  "title": "Solid of revolution.",
  "body": " Solid of revolution   A solid of revolution is a solid region obtained by rotating a planar region around a central linear axis .   "
},
{
  "id": "proc_solid_revolution",
  "level": "2",
  "url": "s_volume.html#proc_solid_revolution",
  "type": "Procedure",
  "number": "1.9.6",
  "title": "Volume of solid of revolution.",
  "body": " Volume of solid of revolution   In each case below, let be the solid of revolution obtained by rotating the given region around the given line .   Disks  Let be the line , and let be an integrable function on the interval satisfying for all . Define to be the region in the -plane lying between the graph of and , and between the lines and .   For all the cross section is a disk of radius .    The cross sectional area function of is thus given by .    The volume of is thus .       Washers  Let be the line , and let and be integrable functions on the interval satisfying for all . Define to be the region in the -plane lying between the graphs of and , and between the lines and .   For all the cross section of is a washer of inner radius and outer radius .    The cross sectional area function of is thus given by .    The volume of is .         "
},
{
  "id": "eg_disc",
  "level": "2",
  "url": "s_volume.html#eg_disc",
  "type": "Example",
  "number": "1.9.7",
  "title": "Disk example.",
  "body": " Disk example   Let , let be the region in the first quadrant lying below the graph of and above the line with equation , and let be the solid obtained by rotating about .    Compute .    Sketch the solid . How else could we have computed the volume in (a)?      As the diagram below indicates, when rotating the given region about the line , we get cross sections that are discs of radius . Using the disc formula, we conclude that . Alternatively, we observe that the solid of revolution in this case is just a cone of radius and height 7. From we conclude that .   Disk diagram     "
},
{
  "id": "eg_washer",
  "level": "2",
  "url": "s_volume.html#eg_washer",
  "type": "Example",
  "number": "1.9.8",
  "title": "Washer example.",
  "body": " Washer example   Let be the region enclosed by the line and the parabola , and let be the solid obtained revolving about the -axis. Sketch and compute the volume of .    The two curves have equations and . We find the points of intersection of these two curves by solving the corresponding system of two equations for and . Setting , we see that . Solving this quadratic yields or . The two points of intersection are thus and . It follows that the region is the set of points lying between the curves and , and the horizontal lines and .  As indicated in the diagram below, the general -cross section of this solid will be a washer of outer radius and inner radius . (The in is equal to 0 in this example.) We conclude that , after some elementary, if tedious integration.   Washer diagram    "
},
{
  "id": "s_inverse",
  "level": "1",
  "url": "s_inverse.html",
  "type": "Section",
  "number": "1.10",
  "title": "Inverse functions",
  "body": " Inverse functions   One-to-one function   A function is one-to-one on its domain if for all with . We express this with logical notation as , or equivalently, using the contrapositive, .     Inverse function   Suppose is one-to-one on its domain , and let be the range of . The inverse function of is the function with domain defined by the following rule: for any , we define to be the unique such that . In other words, is the unique function with domain satisfying for all elements in .     Horizontal line test   Let be a function with domain , and let be the graph of . The function is one-to-one on if and only if for all the horizontal line intersects in at most one point.     Monotonic   Let be a a real-valued function with domain .   The function is increasing on if for all with . Using logical notation: .    The function is decreasing on if for all with . Using logical notation: .    The function is monotonic on if is increasing on or is decreasing on .        Monotonic functions are one-to-one   If is monotonic on its domain , then is one-to-one on and hence has an inverse function.     Computing inverse   Let .   Show that is not one-to-one on .    Show that is one-to-one on and compute an inverse of with respect to this domain.       Using simple properties of quadratic functions, we know that is decreasing on and increasing on . It follows that is one-to-one on either of those smaller subintervals. Since , and more generally for all , we see that is not one-to-one on .  Now restrict to the domain . By definition, the domain of is the range of , which is easily seen to be . Given , to compute we must find the unique satisfying . Solving this equation for , we see that . Since is always nonnegative, and since we seek lying in , we see that we must have , and thus .     Inverse function compendium   Let be one-to-one on its domain , let be the range of , and let be the inverse of .    for all .    The domain of is , the range of ; the range of is , the domain of .    We have .    The point is on the graph of if and only if the point is on the graph of .    The graph of is the reflection of the graph of through the line .        Derivative formula for inverses   Assume is one-to-one and differentiable on the interval , and that for all . Let be the range of .   The inverse function is differentiable on .    We have for all .       We will not prove (1), which is the more difficult part of this theorem. Assuming is true, we prove (2) using the chain rule as follows. By (2) of , we have for all in the domain of . Taking derivatives of both sides of this equation, we see that . Equivalently, since for any we have for some unique satisfying , we see that .     Computing   Let be one-to-one on its domain , let be the range of , and let be the inverse function of . Given , to compute , proceed as follows.   Compute . This is often done by inspection: , by finding the unique such that .    Compute .    Use to conclude .        Derivative of inverse   Let be defined as on the domain of all real numbers.   Show that has an inverse function.    Plot three points on the graph of .    Compute and .          Since is clearly positive for all , we see that is increasing on its domain, and hence is one-to-one. Thus has an inverse function.    Short of actually plotting points, we can at least produce a table of values for using a table of values of , using (4) of .     For general in the domain of (or equivalently, range of ), we have by  . Thus to compute and , it remains only to compute and and plug these into the last expression above. We see using our table of values in (b) that and . Thus .       "
},
{
  "id": "d_one-to-one",
  "level": "2",
  "url": "s_inverse.html#d_one-to-one",
  "type": "Definition",
  "number": "1.10.1",
  "title": "One-to-one function.",
  "body": " One-to-one function   A function is one-to-one on its domain if for all with . We express this with logical notation as , or equivalently, using the contrapositive, .   "
},
{
  "id": "d_invertible",
  "level": "2",
  "url": "s_inverse.html#d_invertible",
  "type": "Definition",
  "number": "1.10.2",
  "title": "Inverse function.",
  "body": " Inverse function   Suppose is one-to-one on its domain , and let be the range of . The inverse function of is the function with domain defined by the following rule: for any , we define to be the unique such that . In other words, is the unique function with domain satisfying for all elements in .   "
},
{
  "id": "th_horizontal_line",
  "level": "2",
  "url": "s_inverse.html#th_horizontal_line",
  "type": "Theorem",
  "number": "1.10.3",
  "title": "Horizontal line test.",
  "body": " Horizontal line test   Let be a function with domain , and let be the graph of . The function is one-to-one on if and only if for all the horizontal line intersects in at most one point.   "
},
{
  "id": "d_monotonic",
  "level": "2",
  "url": "s_inverse.html#d_monotonic",
  "type": "Definition",
  "number": "1.10.4",
  "title": "Monotonic.",
  "body": " Monotonic   Let be a a real-valued function with domain .   The function is increasing on if for all with . Using logical notation: .    The function is decreasing on if for all with . Using logical notation: .    The function is monotonic on if is increasing on or is decreasing on .      "
},
{
  "id": "th_monotonic",
  "level": "2",
  "url": "s_inverse.html#th_monotonic",
  "type": "Theorem",
  "number": "1.10.5",
  "title": "Monotonic functions are one-to-one.",
  "body": " Monotonic functions are one-to-one   If is monotonic on its domain , then is one-to-one on and hence has an inverse function.   "
},
{
  "id": "eg_inverse",
  "level": "2",
  "url": "s_inverse.html#eg_inverse",
  "type": "Example",
  "number": "1.10.6",
  "title": "Computing inverse.",
  "body": " Computing inverse   Let .   Show that is not one-to-one on .    Show that is one-to-one on and compute an inverse of with respect to this domain.       Using simple properties of quadratic functions, we know that is decreasing on and increasing on . It follows that is one-to-one on either of those smaller subintervals. Since , and more generally for all , we see that is not one-to-one on .  Now restrict to the domain . By definition, the domain of is the range of , which is easily seen to be . Given , to compute we must find the unique satisfying . Solving this equation for , we see that . Since is always nonnegative, and since we seek lying in , we see that we must have , and thus .   "
},
{
  "id": "th_inverse_function",
  "level": "2",
  "url": "s_inverse.html#th_inverse_function",
  "type": "Theorem",
  "number": "1.10.7",
  "title": "Inverse function compendium.",
  "body": " Inverse function compendium   Let be one-to-one on its domain , let be the range of , and let be the inverse of .    for all .    The domain of is , the range of ; the range of is , the domain of .    We have .    The point is on the graph of if and only if the point is on the graph of .    The graph of is the reflection of the graph of through the line .      "
},
{
  "id": "th_IFT",
  "level": "2",
  "url": "s_inverse.html#th_IFT",
  "type": "Theorem",
  "number": "1.10.8",
  "title": "Derivative formula for inverses.",
  "body": " Derivative formula for inverses   Assume is one-to-one and differentiable on the interval , and that for all . Let be the range of .   The inverse function is differentiable on .    We have for all .       We will not prove (1), which is the more difficult part of this theorem. Assuming is true, we prove (2) using the chain rule as follows. By (2) of , we have for all in the domain of . Taking derivatives of both sides of this equation, we see that . Equivalently, since for any we have for some unique satisfying , we see that .   "
},
{
  "id": "proc_IFT",
  "level": "2",
  "url": "s_inverse.html#proc_IFT",
  "type": "Procedure",
  "number": "1.10.9",
  "title": "Computing <span class=\"process-math\">\\((f^{-1})'(b)\\)<\/span>.",
  "body": " Computing   Let be one-to-one on its domain , let be the range of , and let be the inverse function of . Given , to compute , proceed as follows.   Compute . This is often done by inspection: , by finding the unique such that .    Compute .    Use to conclude .      "
},
{
  "id": "eg_inverse_derivative",
  "level": "2",
  "url": "s_inverse.html#eg_inverse_derivative",
  "type": "Example",
  "number": "1.10.10",
  "title": "Derivative of inverse.",
  "body": " Derivative of inverse   Let be defined as on the domain of all real numbers.   Show that has an inverse function.    Plot three points on the graph of .    Compute and .          Since is clearly positive for all , we see that is increasing on its domain, and hence is one-to-one. Thus has an inverse function.    Short of actually plotting points, we can at least produce a table of values for using a table of values of , using (4) of .     For general in the domain of (or equivalently, range of ), we have by  . Thus to compute and , it remains only to compute and and plug these into the last expression above. We see using our table of values in (b) that and . Thus .      "
},
{
  "id": "s_natural_log",
  "level": "1",
  "url": "s_natural_log.html",
  "type": "Section",
  "number": "1.11",
  "title": "The natural logarithm",
  "body": " The natural logarithm   Natural logarithm   The natural logarithm function is the function with domain defined as .     Natural logarithm properties      The natural logarithm is differentiable (hence also continuous) on and satisfies . for all in .    The natural logarithm is increasing on and hence one-to-one. The graph of is always concave down.    We have     The range of is .     .    We have         Technically the expression in only has meaning for us when is a rational number. This will be corrected in the next section. We state the property in full generality here nonetheless so that we don't have to repeat it later.    Antiderivative of   The function is an antiderivative of the function on : i.e., we have .     Euler's number    Euler's number , denoted , is the unique number in satisfying . In other words, is the number satisfying .     Trigonometric antiderivatives                             "
},
{
  "id": "d_natural_log",
  "level": "2",
  "url": "s_natural_log.html#d_natural_log",
  "type": "Definition",
  "number": "1.11.1",
  "title": "Natural logarithm.",
  "body": " Natural logarithm   The natural logarithm function is the function with domain defined as .   "
},
{
  "id": "th_log_props",
  "level": "2",
  "url": "s_natural_log.html#th_log_props",
  "type": "Theorem",
  "number": "1.11.2",
  "title": "Natural logarithm properties.",
  "body": " Natural logarithm properties      The natural logarithm is differentiable (hence also continuous) on and satisfies . for all in .    The natural logarithm is increasing on and hence one-to-one. The graph of is always concave down.    We have     The range of is .     .    We have       "
},
{
  "id": "remark-8",
  "level": "2",
  "url": "s_natural_log.html#remark-8",
  "type": "Remark",
  "number": "1.11.3",
  "title": "",
  "body": " Technically the expression in only has meaning for us when is a rational number. This will be corrected in the next section. We state the property in full generality here nonetheless so that we don't have to repeat it later.  "
},
{
  "id": "cor_log_props",
  "level": "2",
  "url": "s_natural_log.html#cor_log_props",
  "type": "Corollary",
  "number": "1.11.4",
  "title": "Antiderivative of <span class=\"process-math\">\\(f(x)=1\/x\\)<\/span>.",
  "body": " Antiderivative of   The function is an antiderivative of the function on : i.e., we have .   "
},
{
  "id": "d_Eulers_num",
  "level": "2",
  "url": "s_natural_log.html#d_Eulers_num",
  "type": "Definition",
  "number": "1.11.5",
  "title": "Euler’s number.",
  "body": " Euler's number    Euler's number , denoted , is the unique number in satisfying . In other words, is the number satisfying .   "
},
{
  "id": "th_trig_antiderivative",
  "level": "2",
  "url": "s_natural_log.html#th_trig_antiderivative",
  "type": "Theorem",
  "number": "1.11.6",
  "title": "Trigonometric antiderivatives.",
  "body": " Trigonometric antiderivatives                            "
},
{
  "id": "s_exponential",
  "level": "1",
  "url": "s_exponential.html",
  "type": "Section",
  "number": "1.12",
  "title": "Exponential functions",
  "body": " Exponential functions   Exponential function   The exponential function , denoted , is defined as the inverse of the natural logarithm function. Using inverse function properties, this means that we have . We also write for .     Exponential function properties      The exponential function is differentiable (hence also continuous) on all of and satisfies .    The exponential function is increasing on and hence one-to-one. The graph of is concave up everywhere.    We have     The domain of is ; the range of is .     .    We have for all .    We have .        Base- exponential function   Let be a fixed positive number. Given any , we define the power expression as . The exponential function with base  , is the function with domain defined as for all .     Base- logarithm   Let be a fixed positive number, . The logarithmic function with base  , denoted is defined as the inverse function of the base- exponential function .     Logarithmic and exponential compendium   The table below summarizes important properties of the functions and for a base satisfying .  Base- functions,          Domain      Range      Monotonicity  Increasing  Increasing    Limit as      Limit as   1    Limit as  NA  0    Properties              Relation to           Logarithmic change of base   Let and be positive numbers. We have for all .     Derivative\/antiderivative compendium   We collect here the new derivative formulas obtained via logarithms and exponential functions, along with their equivalent antiderivative formulas.      Solving exponential equations   Find all satisfying . Simplify your answer as much as possible.    We have . Alternatively, using the fact that the function is one-to-one and , we see that .     Exponential and logarithmic derivatives   Compute for each of the following functions.                   We have .    We have .        Exponential and logarithmic integrals   Compute the following definite and indefinite integrals.                   We have .    Consider the somewhat tricky substitution: , . We then have .       "
},
{
  "id": "d_exp",
  "level": "2",
  "url": "s_exponential.html#d_exp",
  "type": "Definition",
  "number": "1.12.1",
  "title": "Exponential function.",
  "body": " Exponential function   The exponential function , denoted , is defined as the inverse of the natural logarithm function. Using inverse function properties, this means that we have . We also write for .   "
},
{
  "id": "th_exp_props",
  "level": "2",
  "url": "s_exponential.html#th_exp_props",
  "type": "Theorem",
  "number": "1.12.2",
  "title": "Exponential function properties.",
  "body": " Exponential function properties      The exponential function is differentiable (hence also continuous) on all of and satisfies .    The exponential function is increasing on and hence one-to-one. The graph of is concave up everywhere.    We have     The domain of is ; the range of is .     .    We have for all .    We have .      "
},
{
  "id": "d_exp_base_a",
  "level": "2",
  "url": "s_exponential.html#d_exp_base_a",
  "type": "Definition",
  "number": "1.12.3",
  "title": "Base-<span class=\"process-math\">\\(a\\)<\/span> exponential function.",
  "body": " Base- exponential function   Let be a fixed positive number. Given any , we define the power expression as . The exponential function with base  , is the function with domain defined as for all .   "
},
{
  "id": "d_log_base_a",
  "level": "2",
  "url": "s_exponential.html#d_log_base_a",
  "type": "Definition",
  "number": "1.12.4",
  "title": "Base-<span class=\"process-math\">\\(a\\)<\/span> logarithm.",
  "body": " Base- logarithm   Let be a fixed positive number, . The logarithmic function with base  , denoted is defined as the inverse function of the base- exponential function .   "
},
{
  "id": "th_exp_log",
  "level": "2",
  "url": "s_exponential.html#th_exp_log",
  "type": "Theorem",
  "number": "1.12.5",
  "title": "Logarithmic and exponential compendium.",
  "body": " Logarithmic and exponential compendium   The table below summarizes important properties of the functions and for a base satisfying .  Base- functions,          Domain      Range      Monotonicity  Increasing  Increasing    Limit as      Limit as   1    Limit as  NA  0    Properties              Relation to         "
},
{
  "id": "th_log_change_base",
  "level": "2",
  "url": "s_exponential.html#th_log_change_base",
  "type": "Theorem",
  "number": "1.12.7",
  "title": "Logarithmic change of base.",
  "body": " Logarithmic change of base   Let and be positive numbers. We have for all .   "
},
{
  "id": "th_antiderivative_compendium_log",
  "level": "2",
  "url": "s_exponential.html#th_antiderivative_compendium_log",
  "type": "Theorem",
  "number": "1.12.8",
  "title": "Derivative\/antiderivative compendium.",
  "body": " Derivative\/antiderivative compendium   We collect here the new derivative formulas obtained via logarithms and exponential functions, along with their equivalent antiderivative formulas.    "
},
{
  "id": "eg_log_solve",
  "level": "2",
  "url": "s_exponential.html#eg_log_solve",
  "type": "Example",
  "number": "1.12.9",
  "title": "Solving exponential equations.",
  "body": " Solving exponential equations   Find all satisfying . Simplify your answer as much as possible.    We have . Alternatively, using the fact that the function is one-to-one and , we see that .   "
},
{
  "id": "eg_exp_log_deriv",
  "level": "2",
  "url": "s_exponential.html#eg_exp_log_deriv",
  "type": "Example",
  "number": "1.12.10",
  "title": "Exponential and logarithmic derivatives.",
  "body": " Exponential and logarithmic derivatives   Compute for each of the following functions.                   We have .    We have .      "
},
{
  "id": "eg_exp_log_int",
  "level": "2",
  "url": "s_exponential.html#eg_exp_log_int",
  "type": "Example",
  "number": "1.12.11",
  "title": "Exponential and logarithmic integrals.",
  "body": " Exponential and logarithmic integrals   Compute the following definite and indefinite integrals.                   We have .    Consider the somewhat tricky substitution: , . We then have .      "
},
{
  "id": "separable_diffeq",
  "level": "1",
  "url": "separable_diffeq.html",
  "type": "Section",
  "number": "1.13",
  "title": "Separable differential equations",
  "body": " Separable differential equations   Exponential growth and decay   Suppose the function satisfies the differential equation , where is a fixed constant.  If then is said to undergo exponential growth .  If then is said to undergo exponential decay .     Exponential growth\/decay   Fix a nonzero constant . Find a general formula for all functions with domain satisfying .    The following technique for solving for is called separation of variables , as makes clear.  First let's assume that for all . In this case we have     First-order differential equation   A first-order differential equation for the function is an equation that can be written in the form where denotes an arbitrary expression involving and .  A solution to a differential equation is any function that satisfies equation ; as such it is useful to think of the function in this context as an unknown that we are trying to solve for. The general solution to a differential equation is a formula, possibly containing undetermined constants, describing all solutions to the differential equation.     Separable first-order differential equation   A separable differential equation for the function is a differential equation that can be written in the form , or equivalently, letting , .     Separation of variables (algebraic form)   To solve a separable differential equation of the form for the function , proceed as follows.   Separation  Write the equation as and take take the indefinite integral of both sides. .    Integration  Attempt to find an antiderivative of and an antiderivative for .    Algebra  The resulting general equation is said to be an implicit solution of the differential equation . An explicit solution is obtained from by solving for in terms of and , if possible.        Separation of variables   Solve the following differential equations using separation of variables. If an initial condition is given, provide the corresponding particular solution. Otherwise, give the general solution.              , .          Let . Following we compute . We conclude that is the general solution, where . How arbitrary is ? Since was arbitrary, the expression can assume any value except 0. Setting in our formula yields the function , which by inspection also satisfies the differential equation. We conclude that the general solution is where is any real number.    Following we compute where is any real number.    Let . Following we compute . Lastly, using the initial condition, we see that Thus .        Newton's law of cooling   Suppose a hot object cools in a room kept at constant temperature of (in celcius). Newton's law of cooling states that the rate at which the object cools (with respect to time) is proportional to the difference between its current temperature and the room temperature .   Write a differential equation that describes Newton's law of cooling in this setting.    Find the general solution to this differential equation.    Find a the particular solution to the situation where C, the object's initial temperature is C, and after minutes the object's temperature is C.          Let temperature be given by the function . The rate of change of with respect to is then . Newton's law says this rate of change is proportional to the difference of the current temperature of the object and the room temperature. Mathematically, we write this proportionality relation as , where is some fixed constant, called the constant of proportionality .    Equation can be solved using in much the same manner as , yielding a general solution of the form , where is any real number.    Assuming , we have . We use the two additional pieces of information to determine the undetermined constants and . We have . We conclude that , where . Below you find a graph of along with its horizontal asymptote corresponding to the steady room temperature .   Graph of solution to Newton's law         "
},
{
  "id": "d_exp_grow_decay",
  "level": "2",
  "url": "separable_diffeq.html#d_exp_grow_decay",
  "type": "Definition",
  "number": "1.13.1",
  "title": "Exponential growth and decay.",
  "body": " Exponential growth and decay   Suppose the function satisfies the differential equation , where is a fixed constant.  If then is said to undergo exponential growth .  If then is said to undergo exponential decay .   "
},
{
  "id": "example-39",
  "level": "2",
  "url": "separable_diffeq.html#example-39",
  "type": "Example",
  "number": "1.13.2",
  "title": "Exponential growth\/decay.",
  "body": " Exponential growth\/decay   Fix a nonzero constant . Find a general formula for all functions with domain satisfying .    The following technique for solving for is called separation of variables , as makes clear.  First let's assume that for all . In this case we have   "
},
{
  "id": "d_diffeq",
  "level": "2",
  "url": "separable_diffeq.html#d_diffeq",
  "type": "Definition",
  "number": "1.13.3",
  "title": "First-order differential equation.",
  "body": " First-order differential equation   A first-order differential equation for the function is an equation that can be written in the form where denotes an arbitrary expression involving and .  A solution to a differential equation is any function that satisfies equation ; as such it is useful to think of the function in this context as an unknown that we are trying to solve for. The general solution to a differential equation is a formula, possibly containing undetermined constants, describing all solutions to the differential equation.   "
},
{
  "id": "d_sep_diffeq",
  "level": "2",
  "url": "separable_diffeq.html#d_sep_diffeq",
  "type": "Definition",
  "number": "1.13.4",
  "title": "Separable first-order differential equation.",
  "body": " Separable first-order differential equation   A separable differential equation for the function is a differential equation that can be written in the form , or equivalently, letting , .   "
},
{
  "id": "proc_sep_vars",
  "level": "2",
  "url": "separable_diffeq.html#proc_sep_vars",
  "type": "Procedure",
  "number": "1.13.5",
  "title": "Separation of variables (algebraic form).",
  "body": " Separation of variables (algebraic form)   To solve a separable differential equation of the form for the function , proceed as follows.   Separation  Write the equation as and take take the indefinite integral of both sides. .    Integration  Attempt to find an antiderivative of and an antiderivative for .    Algebra  The resulting general equation is said to be an implicit solution of the differential equation . An explicit solution is obtained from by solving for in terms of and , if possible.      "
},
{
  "id": "eg_sep_vars",
  "level": "2",
  "url": "separable_diffeq.html#eg_sep_vars",
  "type": "Example",
  "number": "1.13.6",
  "title": "Separation of variables.",
  "body": " Separation of variables   Solve the following differential equations using separation of variables. If an initial condition is given, provide the corresponding particular solution. Otherwise, give the general solution.              , .          Let . Following we compute . We conclude that is the general solution, where . How arbitrary is ? Since was arbitrary, the expression can assume any value except 0. Setting in our formula yields the function , which by inspection also satisfies the differential equation. We conclude that the general solution is where is any real number.    Following we compute where is any real number.    Let . Following we compute . Lastly, using the initial condition, we see that Thus .      "
},
{
  "id": "eg_Newton_cooling",
  "level": "2",
  "url": "separable_diffeq.html#eg_Newton_cooling",
  "type": "Example",
  "number": "1.13.7",
  "title": "Newton’s law of cooling.",
  "body": " Newton's law of cooling   Suppose a hot object cools in a room kept at constant temperature of (in celcius). Newton's law of cooling states that the rate at which the object cools (with respect to time) is proportional to the difference between its current temperature and the room temperature .   Write a differential equation that describes Newton's law of cooling in this setting.    Find the general solution to this differential equation.    Find a the particular solution to the situation where C, the object's initial temperature is C, and after minutes the object's temperature is C.          Let temperature be given by the function . The rate of change of with respect to is then . Newton's law says this rate of change is proportional to the difference of the current temperature of the object and the room temperature. Mathematically, we write this proportionality relation as , where is some fixed constant, called the constant of proportionality .    Equation can be solved using in much the same manner as , yielding a general solution of the form , where is any real number.    Assuming , we have . We use the two additional pieces of information to determine the undetermined constants and . We have . We conclude that , where . Below you find a graph of along with its horizontal asymptote corresponding to the steady room temperature .   Graph of solution to Newton's law        "
},
{
  "id": "s_lHop_A",
  "level": "1",
  "url": "s_lHop_A.html",
  "type": "Section",
  "number": "1.14",
  "title": "L’Hôpital’s rule",
  "body": " L'Hôpital's rule   Indeterminate forms   Consider a limit expression of the form , where is either a finite number or .  The expression is an indeterminate form of type if .  The expression is an indeterminate form of type if .     Indeterminate forms   Decide whether the following limit expressions have determinate or indeterminate forms. If determinate, compute the limit.                                  As we have and . Thus the limit expression is indetermine, of form .    As we have and (using known properties of ). The form of this limit expression is thus , which is not indeterminate: since the numerator gets arbitrarily small and the denominator gets arbitrarily large, we see the limit is equal to 0. (Note that the denominator being negative is of no consequence here; what is important is that it is large in absolute value.)    As , we have and . The limit expression is thus of form . Again this is a determinate form. We conclude that the limit is equal to , since the numerator gets arbitrarily large (positive), and the denominator gets arbitrarily small (and positive). (Notice that here sign (positive\/negative) does play a role.)    As we have and (from the positive side). As in the previous case, we conclude that the form is determinate and the limit is equal to .    As we have and . The limit expression is thus indeterminate, of form .        A limit expression having an indeterminate form does not mean that the limit does not exist. You should interpret this conclusion as simply saying that our current analysis is not detailed enough to determine whether the limit exists. In this spirit we will be careful not to write expressions like as these suggest we are asserting something more definitive about the limit expression.    L'Hôpital's rule   Let and be differentiable on an open interval containing , where is either a finite number or , and suppose for all in the interval.  If is an indeterminate form of type or , then , provided the limit on the right exists or is equal to .  The same result holds if we replace the limit with a one-sided limit.     Common mistake  In a situation where l'Hôpital's rule applies, do not make the mistake of computing the derivative of the quotient . That is, in general . Not only will this mistake usually result in an incorrect computation, it is also very time consuming to compute .    L'Hôpital's rule   Compute the following limits.                                        .     .        Students tend to fall madly in love with l'Hôpital's rule upon first encountering it. Here are some comments to temper your passion.   Make sure the relevant conditions apply: , (a) and must be differentiable on an open interval containing , and (b) we must have an indeterminate form of type or .    Even if l'Hôpital's rule applies, it may not be useful! In the following examples, applying l'Hôpital's rule either gets us nowhere, or is too cumbersome. .       Indeterminate form limit   Evaluate .    Although this is a situation where l'Hôpital's rule applies, upon applying it once we see that we get essentially the same limit expression back. Instead, we make use of our intuition. Since , it would stand to reason that the term dominates the other exponential terms as . We make this intuition rigorous by forcibly factoring out the dominating term : .    "
},
{
  "id": "d_indeterminate",
  "level": "2",
  "url": "s_lHop_A.html#d_indeterminate",
  "type": "Definition",
  "number": "1.14.1",
  "title": "Indeterminate forms.",
  "body": " Indeterminate forms   Consider a limit expression of the form , where is either a finite number or .  The expression is an indeterminate form of type if .  The expression is an indeterminate form of type if .   "
},
{
  "id": "eg_indeterminate",
  "level": "2",
  "url": "s_lHop_A.html#eg_indeterminate",
  "type": "Example",
  "number": "1.14.2",
  "title": "Indeterminate forms.",
  "body": " Indeterminate forms   Decide whether the following limit expressions have determinate or indeterminate forms. If determinate, compute the limit.                                  As we have and . Thus the limit expression is indetermine, of form .    As we have and (using known properties of ). The form of this limit expression is thus , which is not indeterminate: since the numerator gets arbitrarily small and the denominator gets arbitrarily large, we see the limit is equal to 0. (Note that the denominator being negative is of no consequence here; what is important is that it is large in absolute value.)    As , we have and . The limit expression is thus of form . Again this is a determinate form. We conclude that the limit is equal to , since the numerator gets arbitrarily large (positive), and the denominator gets arbitrarily small (and positive). (Notice that here sign (positive\/negative) does play a role.)    As we have and (from the positive side). As in the previous case, we conclude that the form is determinate and the limit is equal to .    As we have and . The limit expression is thus indeterminate, of form .      "
},
{
  "id": "remark-9",
  "level": "2",
  "url": "s_lHop_A.html#remark-9",
  "type": "Remark",
  "number": "1.14.3",
  "title": "",
  "body": " A limit expression having an indeterminate form does not mean that the limit does not exist. You should interpret this conclusion as simply saying that our current analysis is not detailed enough to determine whether the limit exists. In this spirit we will be careful not to write expressions like as these suggest we are asserting something more definitive about the limit expression.  "
},
{
  "id": "th_lHop",
  "level": "2",
  "url": "s_lHop_A.html#th_lHop",
  "type": "Theorem",
  "number": "1.14.4",
  "title": "L’Hôpital’s rule.",
  "body": " L'Hôpital's rule   Let and be differentiable on an open interval containing , where is either a finite number or , and suppose for all in the interval.  If is an indeterminate form of type or , then , provided the limit on the right exists or is equal to .  The same result holds if we replace the limit with a one-sided limit.   "
},
{
  "id": "warning-1",
  "level": "2",
  "url": "s_lHop_A.html#warning-1",
  "type": "Warning",
  "number": "1.14.5",
  "title": "Common mistake.",
  "body": " Common mistake  In a situation where l'Hôpital's rule applies, do not make the mistake of computing the derivative of the quotient . That is, in general . Not only will this mistake usually result in an incorrect computation, it is also very time consuming to compute .  "
},
{
  "id": "eg_lHop",
  "level": "2",
  "url": "s_lHop_A.html#eg_lHop",
  "type": "Example",
  "number": "1.14.6",
  "title": "L’Hôpital’s rule.",
  "body": " L'Hôpital's rule   Compute the following limits.                                        .     .      "
},
{
  "id": "remark-10",
  "level": "2",
  "url": "s_lHop_A.html#remark-10",
  "type": "Remark",
  "number": "1.14.7",
  "title": "",
  "body": " Students tend to fall madly in love with l'Hôpital's rule upon first encountering it. Here are some comments to temper your passion.   Make sure the relevant conditions apply: , (a) and must be differentiable on an open interval containing , and (b) we must have an indeterminate form of type or .    Even if l'Hôpital's rule applies, it may not be useful! In the following examples, applying l'Hôpital's rule either gets us nowhere, or is too cumbersome. .     "
},
{
  "id": "example-44",
  "level": "2",
  "url": "s_lHop_A.html#example-44",
  "type": "Example",
  "number": "1.14.8",
  "title": "Indeterminate form limit.",
  "body": " Indeterminate form limit   Evaluate .    Although this is a situation where l'Hôpital's rule applies, upon applying it once we see that we get essentially the same limit expression back. Instead, we make use of our intuition. Since , it would stand to reason that the term dominates the other exponential terms as . We make this intuition rigorous by forcibly factoring out the dominating term : .   "
},
{
  "id": "s_lHop_B",
  "level": "1",
  "url": "s_lHop_B.html",
  "type": "Section",
  "number": "1.15",
  "title": "More on indeterminate forms",
  "body": " More on indeterminate forms  There are other types of indeterminate form limit expression to which l'Hôpital's rule cannot be directly applied. However, after some algebraic manipulation we can often get the expression into a more tractable form.   More indeterminate forms   Assume is either a finite number or .  If , then is an indeterminate form of type .  If and , then is an indeterminate form of type .  If , then is an indeterminate form of type .  If and , then is an indeterminate form of type .  If and , then is an indeterminate form of type .     Indeterminate forms   Below you find a variety of potentially useful techniques for dealing with limit expressions of indeterminate form.   Types  If is of type or , we can apply l'Hôpital's rule.    Type  If is of type , we can attempt to rewrite the expression as , where is either of type or , and then apply l'Hôpital's rule.    Type  If is of type , we can write and then apply l'Hôpital's rule.    Exponential expressions  For any limit expression of the form we can write , compute the limit , and conclude that .        More indeterminate forms   Compute the following limits.                                   . The last equality was shown in with the help of l'Hôpital's rule.     Note: the step where is factored out of the numerator and denominator was motivated by the intuition that as , the term in the radical dominates the term.     .     .     .       "
},
{
  "id": "d_indeterminate_further",
  "level": "2",
  "url": "s_lHop_B.html#d_indeterminate_further",
  "type": "Definition",
  "number": "1.15.1",
  "title": "More indeterminate forms.",
  "body": " More indeterminate forms   Assume is either a finite number or .  If , then is an indeterminate form of type .  If and , then is an indeterminate form of type .  If , then is an indeterminate form of type .  If and , then is an indeterminate form of type .  If and , then is an indeterminate form of type .   "
},
{
  "id": "proc_expanded_lHop",
  "level": "2",
  "url": "s_lHop_B.html#proc_expanded_lHop",
  "type": "Procedure",
  "number": "1.15.2",
  "title": "Indeterminate forms.",
  "body": " Indeterminate forms   Below you find a variety of potentially useful techniques for dealing with limit expressions of indeterminate form.   Types  If is of type or , we can apply l'Hôpital's rule.    Type  If is of type , we can attempt to rewrite the expression as , where is either of type or , and then apply l'Hôpital's rule.    Type  If is of type , we can write and then apply l'Hôpital's rule.    Exponential expressions  For any limit expression of the form we can write , compute the limit , and conclude that .      "
},
{
  "id": "eg_indeterminate_further",
  "level": "2",
  "url": "s_lHop_B.html#eg_indeterminate_further",
  "type": "Example",
  "number": "1.15.3",
  "title": "More indeterminate forms.",
  "body": " More indeterminate forms   Compute the following limits.                                   . The last equality was shown in with the help of l'Hôpital's rule.     Note: the step where is factored out of the numerator and denominator was motivated by the intuition that as , the term in the radical dominates the term.     .     .     .      "
},
{
  "id": "s_inverse_trig",
  "level": "1",
  "url": "s_inverse_trig.html",
  "type": "Section",
  "number": "1.16",
  "title": "Inverse trigonometric functions",
  "body": " Inverse trigonometric functions   Inverse trigonometric functions   The following are examples of what are called inverse trigonometric functions .   On the restricted domain the function is one-to-one, with range . The inverse function of restricted to this domain is called the arcsine function , denoted .    On the restricted domain the function is one-to-one, with range . The inverse function of restricted to this domain is called the arccosine function , denoted .    On the restricted domain the function is one-to-one, with range . The inverse function of restricted to this domain is called the arctangent function , denoted .        Occasionally an alternative notation is used to denote inverse trigonometric functions: namely, . We will avoid this notation as it misleadingly suggests that the inverse trigonometric functions are reciprocals of the corresponding trigonometric functions. They are not!    Properties of inverse trigonometric functions     The function is an increasing function with domain and range . It satisfies the following properties: .    The function is a decreasing function with domain and range . It satisfies the following properties: .    The function is an increasing function with domain and range . It satisfies the following properties:        Computing with inverse trig functions   Compute the following values of trigonometric functions by hand.                    Hint . The answer is not .          Common mistake: . Why? By definition, the outputs of lie in the interval . Instead, using , we have if and only if and . The unique satisfying these two conditions is . We conclude that .    Using , we have if and only if and . The unique satisfying these two conditions is . We conclude that .    Using , we have if and only if and . Since is the unique angle satifying these two conditions, we conclude that that .    Recall that for any . (You can convince yourself of this either by drawing a unit circle picture, or by using the difference identity for .) It follows that .       The inverse trigonometric functions are often used to provide a single solution to an elementary trigonometric equation that we cannot solve by hand : , equations whose solutions do not correspond to one of the familiar angles of the unit circle. For example, is a particular solution to the equation . But what if we are asked to find all solutions to such an equation? In this case we make use of the following procedure which, given a particular solution to a given trigonometric equation, describes what the general solution is.   General solution to trig equations      Sine equations  Fix a constant . If is a solution to the elementary sine equation , then the general solution is given by , where is any integer.    Cosine equations  Fix a constant . If is a particular solution to the elementary cosine equation , then the general solution is given by , where is any integer.    Tangent equations  Fix a constant . If is a particular solution to the elementary tangent equation , then the general solution is given by , where is any integer.        Solving trig equations   Find all solutions to the following trigonometric equations lying within the interval . You may express your answer in terms of values of inverse trigonometric functions.                   After some algebra we rewrite the equation as or , where . Since is a solution to , according to the general solution is . Since , we conclude that the general solution to the original equation is . Which of these infinitely-many solutions lies in the prescribed interval ? Since , we have and . It follows that the solutions lying in are .    Since is one solution to the given equation, the general solution is given by , where is any integer. Which of these lie in the interval ? Since , we have and . Thus the solutions lying in are and .        Derivatives of inverse trig functions   The following derivative\/antiderivative formulas hold: .    We prove and ; the proof of proceeds along similar lines.   Proof of   Let restricted to the domain , and let . Using , we have . The last step here is perhaps the most interesting, and follows from the fact that for any . Why is this true? Set , an angle lying in . Using the fact that , we can draw a unit circle picture like the one below. Since the vertical leg of the right triangle there has length , the horizontal leg has length . Since this length is equal to the -coordinate of the point below, we have and thus , as claimed.  Unit circle picture for arcsin derivative proof      Proof of   Let restricted to the domain , and let . Using , we have .      Derivatives of inverse trig functions   Find the equation of the tangent line to at .    The tangent line passes through the point and has slope . Using point-slope form, we see that the line has equation .     Limit computation   Compute .    Since , we have .     Inverse trig functions as antiderivatives   Compute .    We have .     Inverse trig functions as antiderivatives   Compute .    We have .    "
},
{
  "id": "d_inverse_trig",
  "level": "2",
  "url": "s_inverse_trig.html#d_inverse_trig",
  "type": "Definition",
  "number": "1.16.1",
  "title": "Inverse trigonometric functions.",
  "body": " Inverse trigonometric functions   The following are examples of what are called inverse trigonometric functions .   On the restricted domain the function is one-to-one, with range . The inverse function of restricted to this domain is called the arcsine function , denoted .    On the restricted domain the function is one-to-one, with range . The inverse function of restricted to this domain is called the arccosine function , denoted .    On the restricted domain the function is one-to-one, with range . The inverse function of restricted to this domain is called the arctangent function , denoted .      "
},
{
  "id": "remark-11",
  "level": "2",
  "url": "s_inverse_trig.html#remark-11",
  "type": "Remark",
  "number": "1.16.2",
  "title": "",
  "body": " Occasionally an alternative notation is used to denote inverse trigonometric functions: namely, . We will avoid this notation as it misleadingly suggests that the inverse trigonometric functions are reciprocals of the corresponding trigonometric functions. They are not!  "
},
{
  "id": "th_inverse_trig_props",
  "level": "2",
  "url": "s_inverse_trig.html#th_inverse_trig_props",
  "type": "Theorem",
  "number": "1.16.3",
  "title": "Properties of inverse trigonometric functions.",
  "body": " Properties of inverse trigonometric functions     The function is an increasing function with domain and range . It satisfies the following properties: .    The function is a decreasing function with domain and range . It satisfies the following properties: .    The function is an increasing function with domain and range . It satisfies the following properties:      "
},
{
  "id": "eg_inverse_trig_compute",
  "level": "2",
  "url": "s_inverse_trig.html#eg_inverse_trig_compute",
  "type": "Example",
  "number": "1.16.4",
  "title": "Computing with inverse trig functions.",
  "body": " Computing with inverse trig functions   Compute the following values of trigonometric functions by hand.                    Hint . The answer is not .          Common mistake: . Why? By definition, the outputs of lie in the interval . Instead, using , we have if and only if and . The unique satisfying these two conditions is . We conclude that .    Using , we have if and only if and . The unique satisfying these two conditions is . We conclude that .    Using , we have if and only if and . Since is the unique angle satifying these two conditions, we conclude that that .    Recall that for any . (You can convince yourself of this either by drawing a unit circle picture, or by using the difference identity for .) It follows that .      "
},
{
  "id": "proc_trig_eqns",
  "level": "2",
  "url": "s_inverse_trig.html#proc_trig_eqns",
  "type": "Procedure",
  "number": "1.16.5",
  "title": "General solution to trig equations.",
  "body": " General solution to trig equations      Sine equations  Fix a constant . If is a solution to the elementary sine equation , then the general solution is given by , where is any integer.    Cosine equations  Fix a constant . If is a particular solution to the elementary cosine equation , then the general solution is given by , where is any integer.    Tangent equations  Fix a constant . If is a particular solution to the elementary tangent equation , then the general solution is given by , where is any integer.      "
},
{
  "id": "eg_inverse_trig_solve",
  "level": "2",
  "url": "s_inverse_trig.html#eg_inverse_trig_solve",
  "type": "Example",
  "number": "1.16.6",
  "title": "Solving trig equations.",
  "body": " Solving trig equations   Find all solutions to the following trigonometric equations lying within the interval . You may express your answer in terms of values of inverse trigonometric functions.                   After some algebra we rewrite the equation as or , where . Since is a solution to , according to the general solution is . Since , we conclude that the general solution to the original equation is . Which of these infinitely-many solutions lies in the prescribed interval ? Since , we have and . It follows that the solutions lying in are .    Since is one solution to the given equation, the general solution is given by , where is any integer. Which of these lie in the interval ? Since , we have and . Thus the solutions lying in are and .      "
},
{
  "id": "th_inverse_trig_derivative",
  "level": "2",
  "url": "s_inverse_trig.html#th_inverse_trig_derivative",
  "type": "Theorem",
  "number": "1.16.7",
  "title": "Derivatives of inverse trig functions.",
  "body": " Derivatives of inverse trig functions   The following derivative\/antiderivative formulas hold: .    We prove and ; the proof of proceeds along similar lines.   Proof of   Let restricted to the domain , and let . Using , we have . The last step here is perhaps the most interesting, and follows from the fact that for any . Why is this true? Set , an angle lying in . Using the fact that , we can draw a unit circle picture like the one below. Since the vertical leg of the right triangle there has length , the horizontal leg has length . Since this length is equal to the -coordinate of the point below, we have and thus , as claimed.  Unit circle picture for arcsin derivative proof      Proof of   Let restricted to the domain , and let . Using , we have .    "
},
{
  "id": "eg_inverse_trig_derivative",
  "level": "2",
  "url": "s_inverse_trig.html#eg_inverse_trig_derivative",
  "type": "Example",
  "number": "1.16.8",
  "title": "Derivatives of inverse trig functions.",
  "body": " Derivatives of inverse trig functions   Find the equation of the tangent line to at .    The tangent line passes through the point and has slope . Using point-slope form, we see that the line has equation .   "
},
{
  "id": "example-49",
  "level": "2",
  "url": "s_inverse_trig.html#example-49",
  "type": "Example",
  "number": "1.16.9",
  "title": "Limit computation.",
  "body": " Limit computation   Compute .    Since , we have .   "
},
{
  "id": "eg_inverse_trig_integral",
  "level": "2",
  "url": "s_inverse_trig.html#eg_inverse_trig_integral",
  "type": "Example",
  "number": "1.16.10",
  "title": "Inverse trig functions as antiderivatives.",
  "body": " Inverse trig functions as antiderivatives   Compute .    We have .   "
},
{
  "id": "eg_inv_trig_int_2",
  "level": "2",
  "url": "s_inverse_trig.html#eg_inv_trig_int_2",
  "type": "Example",
  "number": "1.16.11",
  "title": "Inverse trig functions as antiderivatives.",
  "body": " Inverse trig functions as antiderivatives   Compute .    We have .   "
},
{
  "id": "section-17",
  "level": "1",
  "url": "section-17.html",
  "type": "Section",
  "number": "1.17",
  "title": "Integration strategies",
  "body": " Integration strategies   Having introduced a wealth of new derivative\/integral formulas and rules, we now take a moment to give an overview of our integration techniques, and apply them in combination with some algebraic methods to solving integrals in the wild.    Idefinite integral compendium   We collect here our various derivative\/antiderivative formulas. .    Each of the integral computations below will combine various integral formulas, substitution, and an algebraic method.   Vertex form   Compute .    We have .     Polynomial division   Compute .    Use polynomial division with remainder.    Using polynomial division with remainder, we find that , and thus .     Exponential substitution   Compute .    We have .     Exponential substitution (again)   Compute .    We have .     Trig identity   Compute .    Make use of some of the following product-to-sum identities.     We have .    "
},
{
  "id": "th_integral_formulas",
  "level": "2",
  "url": "section-17.html#th_integral_formulas",
  "type": "Theorem",
  "number": "1.17.1",
  "title": "Idefinite integral compendium.",
  "body": " Idefinite integral compendium   We collect here our various derivative\/antiderivative formulas. .   "
},
{
  "id": "eg_int_vertex",
  "level": "2",
  "url": "section-17.html#eg_int_vertex",
  "type": "Example",
  "number": "1.17.2",
  "title": "Vertex form.",
  "body": " Vertex form   Compute .    We have .   "
},
{
  "id": "eg_poly_div",
  "level": "2",
  "url": "section-17.html#eg_poly_div",
  "type": "Example",
  "number": "1.17.3",
  "title": "Polynomial division.",
  "body": " Polynomial division   Compute .    Use polynomial division with remainder.    Using polynomial division with remainder, we find that , and thus .   "
},
{
  "id": "eg_exp_subst",
  "level": "2",
  "url": "section-17.html#eg_exp_subst",
  "type": "Example",
  "number": "1.17.4",
  "title": "Exponential substitution.",
  "body": " Exponential substitution   Compute .    We have .   "
},
{
  "id": "eg_exp_subst_2",
  "level": "2",
  "url": "section-17.html#eg_exp_subst_2",
  "type": "Example",
  "number": "1.17.5",
  "title": "Exponential substitution (again).",
  "body": " Exponential substitution (again)   Compute .    We have .   "
},
{
  "id": "eg_trig_ident",
  "level": "2",
  "url": "section-17.html#eg_trig_ident",
  "type": "Example",
  "number": "1.17.6",
  "title": "Trig identity.",
  "body": " Trig identity   Compute .    Make use of some of the following product-to-sum identities.     We have .   "
},
{
  "id": "section-18",
  "level": "1",
  "url": "section-18.html",
  "type": "Section",
  "number": "1.18",
  "title": "Integration by parts",
  "body": " Integration by parts   The integration by parts technique is yet another instance of our . In this case we take the familiar product rule of differentiation , reexpress it algebraically as , and then integrate both sides to conclude . We have just given a proof of what is called the integration by parts rule.    Integration by parts   Let and be continuously differentiable functions on an interval containing the interval .   Indefinite integral form  We have .    Definite integral form  We have .        The art of by parts   To use the integration by parts technique on an integral of the form proceed as follows:   Who is , and who ?  Declare one of and to be and the other to be . The mnemonic device LIPET ((L)og, (I)nverse trig, (P)olynomial\/radical, (E)xponent, (T)rig) often leads to a useful choice of .    Assemble ingredients  Suppose without loss of generality that we have chosen and . Then compute the derivative of and compute an antiderivative  of :  Integration by parts diagram       Apply by parts rule  Using the ingredients assembled in Step 2, we have .        Classic by parts   Compute      .     Integration workflow   For many integral computations it will be clear whether to use a formula, substitution, or integration by parts. When it is not clear how to proceed, the following workflow might be helpful.   Algebra and formulas  If possible, use an integration formula, perhaps after some simple algebraic preparation. Otherwise, move to (1).    Substitution  Evaluate whether a substitution could transform the integral into one where (0) applies. If not promising, move to (2).    By parts  Evaluate whether the integral is amenable to a by parts approach. You may want to mentally run through a couple of choices of ``who is , and who \". If not promising, move to (3).    Creative algebra  Consider more creative algebraic techniques, including trigonometric identities. If applicable, return to (0).       The following integrals can all be computed using by parts. However, for some of these byou might also explore whether substitution could serve as a useful technique.   Iterated by parts         .     Surprising by parts   Compute     We have . LIPET suggests trying , : .     Rational function   Compute     Using by parts with and , we have . Alternatively, using the substitution , we have . As a third alternative, we could use polynomial division to write , and then conclude . Note that the answer here differs from the previous two by the constant , which of course is not a problem.     Inverse trig   Compute     If using by parts, LIPET suggests the choice , : .     By parts and algebra   Compute     Here is an example where it looks like we are in danger of entering an infinite regress, but where a minus sign comes to our rescue. We have . We've shown that . Using algebra, it follows that , or .    "
},
{
  "id": "th_int_by_parts",
  "level": "2",
  "url": "section-18.html#th_int_by_parts",
  "type": "Theorem",
  "number": "1.18.1",
  "title": "Integration by parts.",
  "body": " Integration by parts   Let and be continuously differentiable functions on an interval containing the interval .   Indefinite integral form  We have .    Definite integral form  We have .      "
},
{
  "id": "proc_int_by_parts",
  "level": "2",
  "url": "section-18.html#proc_int_by_parts",
  "type": "Procedure",
  "number": "1.18.2",
  "title": "The art of by parts.",
  "body": " The art of by parts   To use the integration by parts technique on an integral of the form proceed as follows:   Who is , and who ?  Declare one of and to be and the other to be . The mnemonic device LIPET ((L)og, (I)nverse trig, (P)olynomial\/radical, (E)xponent, (T)rig) often leads to a useful choice of .    Assemble ingredients  Suppose without loss of generality that we have chosen and . Then compute the derivative of and compute an antiderivative  of :  Integration by parts diagram       Apply by parts rule  Using the ingredients assembled in Step 2, we have .      "
},
{
  "id": "eg_by_parts_1",
  "level": "2",
  "url": "section-18.html#eg_by_parts_1",
  "type": "Example",
  "number": "1.18.3",
  "title": "Classic by parts.",
  "body": " Classic by parts   Compute      .   "
},
{
  "id": "proc_int_workflow",
  "level": "2",
  "url": "section-18.html#proc_int_workflow",
  "type": "Procedure",
  "number": "1.18.4",
  "title": "Integration workflow.",
  "body": " Integration workflow   For many integral computations it will be clear whether to use a formula, substitution, or integration by parts. When it is not clear how to proceed, the following workflow might be helpful.   Algebra and formulas  If possible, use an integration formula, perhaps after some simple algebraic preparation. Otherwise, move to (1).    Substitution  Evaluate whether a substitution could transform the integral into one where (0) applies. If not promising, move to (2).    By parts  Evaluate whether the integral is amenable to a by parts approach. You may want to mentally run through a couple of choices of ``who is , and who \". If not promising, move to (3).    Creative algebra  Consider more creative algebraic techniques, including trigonometric identities. If applicable, return to (0).      "
},
{
  "id": "eg_by_parts_2",
  "level": "2",
  "url": "section-18.html#eg_by_parts_2",
  "type": "Example",
  "number": "1.18.5",
  "title": "Iterated by parts.",
  "body": " Iterated by parts         .   "
},
{
  "id": "eg_by_parts_4",
  "level": "2",
  "url": "section-18.html#eg_by_parts_4",
  "type": "Example",
  "number": "1.18.6",
  "title": "Surprising by parts.",
  "body": " Surprising by parts   Compute     We have . LIPET suggests trying , : .   "
},
{
  "id": "eg_by_parts_5",
  "level": "2",
  "url": "section-18.html#eg_by_parts_5",
  "type": "Example",
  "number": "1.18.7",
  "title": "Rational function.",
  "body": " Rational function   Compute     Using by parts with and , we have . Alternatively, using the substitution , we have . As a third alternative, we could use polynomial division to write , and then conclude . Note that the answer here differs from the previous two by the constant , which of course is not a problem.   "
},
{
  "id": "eg_by_parts_6",
  "level": "2",
  "url": "section-18.html#eg_by_parts_6",
  "type": "Example",
  "number": "1.18.8",
  "title": "Inverse trig.",
  "body": " Inverse trig   Compute     If using by parts, LIPET suggests the choice , : .   "
},
{
  "id": "eg_by_parts_7",
  "level": "2",
  "url": "section-18.html#eg_by_parts_7",
  "type": "Example",
  "number": "1.18.9",
  "title": "By parts and algebra.",
  "body": " By parts and algebra   Compute     Here is an example where it looks like we are in danger of entering an infinite regress, but where a minus sign comes to our rescue. We have . We've shown that . Using algebra, it follows that , or .   "
},
{
  "id": "s_trig_int",
  "level": "1",
  "url": "s_trig_int.html",
  "type": "Section",
  "number": "1.19",
  "title": "Trigonometric integrals",
  "body": " Trigonometric integrals  We now develop an integration technique for two very particular types of integrals: . Why these particular pairings of products of functions? In a nutshell, because one of the following four choices of substitution will often come in handy: . and articulate in greater detail when and where such substitutions will be useful. The basic principle is that a given substitution as above will help, when after peeling off part of the integrand to account for the , the remaining part of the integrand can be expressed completely in terms of .   Trigonometric identities   The following identities hold for all real numbers and for which the given expression is defined.   Pythagorean identities       Sum-to-product and double-angle formulas   .    Product-to-sum and square formulas   .        Integrating   Let and be nonnegative integers. When computing use the following strategies.   Odd sine power  If is odd, write and use the substitution .    Odd cosine power  If is odd, write and use the substitution .    Even powers  If and are both even use and to reduce to a lower power of .        Integrating   Let and be nonnegative integers. When computing use the following strategies.   Odd tangent power  If is odd and is positive, write and use the substitution .    Even secant power  If is even and positive, write and use the substitution .    Even tangent power, odd secant power  If is even and is odd, express everything in terms of and possibly use integration by parts.    Tangent power  If , use the identity and strategies from the previous cases.        Odd sine power   Compute .    Peel off a factor of and use the substitution , :      Even powers   Compute .    Both powers are even. We use the square identity to reduce powers across the board: .     Even secant power   Compute .    Peel off a factor of and use the substitution , : .     Odd tangent power   Compute .    Peel off a factor of and use the substitution , : .     Even tangent power, odd secant power   Compute .    Not much we can do here besides integration by parts: . We've shown that . Doing some algebra and solving for , we conclude that .     Tangent power   Compute .    Following the suggestion of we , from which we conclude .    "
},
{
  "id": "th_trig_identities",
  "level": "2",
  "url": "s_trig_int.html#th_trig_identities",
  "type": "Theorem",
  "number": "1.19.1",
  "title": "Trigonometric identities.",
  "body": " Trigonometric identities   The following identities hold for all real numbers and for which the given expression is defined.   Pythagorean identities       Sum-to-product and double-angle formulas   .    Product-to-sum and square formulas   .      "
},
{
  "id": "proc_int_sincos",
  "level": "2",
  "url": "s_trig_int.html#proc_int_sincos",
  "type": "Procedure",
  "number": "1.19.2",
  "title": "Integrating <span class=\"process-math\">\\(\\sin^m x\\cos^n x\\)<\/span>.",
  "body": " Integrating   Let and be nonnegative integers. When computing use the following strategies.   Odd sine power  If is odd, write and use the substitution .    Odd cosine power  If is odd, write and use the substitution .    Even powers  If and are both even use and to reduce to a lower power of .      "
},
{
  "id": "proc_int_tansec",
  "level": "2",
  "url": "s_trig_int.html#proc_int_tansec",
  "type": "Procedure",
  "number": "1.19.3",
  "title": "Integrating <span class=\"process-math\">\\(\\tan^m x\\sec^n x\\)<\/span>.",
  "body": " Integrating   Let and be nonnegative integers. When computing use the following strategies.   Odd tangent power  If is odd and is positive, write and use the substitution .    Even secant power  If is even and positive, write and use the substitution .    Even tangent power, odd secant power  If is even and is odd, express everything in terms of and possibly use integration by parts.    Tangent power  If , use the identity and strategies from the previous cases.      "
},
{
  "id": "eg_odd_sin_power",
  "level": "2",
  "url": "s_trig_int.html#eg_odd_sin_power",
  "type": "Example",
  "number": "1.19.4",
  "title": "Odd sine power.",
  "body": " Odd sine power   Compute .    Peel off a factor of and use the substitution , :    "
},
{
  "id": "eg_even_powers",
  "level": "2",
  "url": "s_trig_int.html#eg_even_powers",
  "type": "Example",
  "number": "1.19.5",
  "title": "Even powers.",
  "body": " Even powers   Compute .    Both powers are even. We use the square identity to reduce powers across the board: .   "
},
{
  "id": "eg_even_sec_power",
  "level": "2",
  "url": "s_trig_int.html#eg_even_sec_power",
  "type": "Example",
  "number": "1.19.6",
  "title": "Even secant power.",
  "body": " Even secant power   Compute .    Peel off a factor of and use the substitution , : .   "
},
{
  "id": "eg_odd_tan_power",
  "level": "2",
  "url": "s_trig_int.html#eg_odd_tan_power",
  "type": "Example",
  "number": "1.19.7",
  "title": "Odd tangent power.",
  "body": " Odd tangent power   Compute .    Peel off a factor of and use the substitution , : .   "
},
{
  "id": "eg_even_tan_odd_sec",
  "level": "2",
  "url": "s_trig_int.html#eg_even_tan_odd_sec",
  "type": "Example",
  "number": "1.19.8",
  "title": "Even tangent power, odd secant power.",
  "body": " Even tangent power, odd secant power   Compute .    Not much we can do here besides integration by parts: . We've shown that . Doing some algebra and solving for , we conclude that .   "
},
{
  "id": "eg_tan_power",
  "level": "2",
  "url": "s_trig_int.html#eg_tan_power",
  "type": "Example",
  "number": "1.19.9",
  "title": "Tangent power.",
  "body": " Tangent power   Compute .    Following the suggestion of we , from which we conclude .   "
},
{
  "id": "s_trig_subst",
  "level": "1",
  "url": "s_trig_subst.html",
  "type": "Section",
  "number": "1.20",
  "title": "Trigonometric substitution",
  "body": " Trigonometric substitution  Trigonometric substitution is an example of a more general integral technique that we call inverse substitution . In turn, inverse substitution is really just an application of the substitution where our substitution function is invertible .   Inverse substitution: indefinite integral   To compute using inverse substitution, proceed as follows.   Choose a one-to-one, differentiable substitution function with differentiable inverse and assemble the two equations     Compute .    Conclude that . When an explicit formula for is not available, we attempt to compute by rewriting in terms of using the equation .        Trigonometric substitution   The table below indicates potentially helpful inverse substitutions for functions of various types. .     Reference triangles   When finishing an integral computation using an trigonometric substitution, the following types of reference triangles are useful for converting your expression back in terms of .  For the sake of space, we only provide examples of reference triangles where the angle lies in . In practice, you should provide a reference triangle diagram that reflects the interval is restricted to, and take care with the sign of the various trigonometric values.    Sine substitution  Consider the substitution , where is positive. A reference diagram like the following helps us see that .   Reference triangle for   Reference triange for sine substitution       Tangent substitution  Consider the substitution , where is positive. A reference diagram like the following allows us to deduce that .   Reference triangle for   Reference triangle for tangent substitution       Secant substitution  Consider the substitution , where is positive. A reference diagram like the following allows us to deduce that    Reference triangle for   Reference triangle for secant substitution          Inverse substitution: definite integral   To compute using inverse substitution, proceed as follows.   Choose a one-to-one, differentiable substitution function with differentiable inverse and write down the two inverse substitution equations     Conclude that .        Sine substitution    Find an antiderivative of .     Using we try the inverse substitution with restriction . We compute . Here we have used once again that . Recall that this can be derived using the following reference triangle.  Reference triangle for        Area of circle   Derive the area formula for a circle of radius .    Let be a circle of radius . Choosing the origin to be the center of , we may assume that has equation . The interior of the circle is the region lying between the graphs of the two function and from to . Using we compute .     Tangent substitution   Compute .    Following , we try the inverse substitution , , : . Here we deduce that from the reference triangle for .  Reference triangle for tangent substitution        Secant substitution   Let be a fixed positive number. Compute .    Following we try the inverse substitution , , : .     Secant substitution: definite   Compute .    We use the inverse substitution . Solve and for , we see that the new limits of integration are and . Thus we have .     Secant substitution: indefinite   Find an antiderivative of the function on the domain . The only inverse trigonometric functions allowed to appear in your formula for are and .     To be assigned on written homework.    "
},
{
  "id": "proc_inv_sub_indef",
  "level": "2",
  "url": "s_trig_subst.html#proc_inv_sub_indef",
  "type": "Procedure",
  "number": "1.20.1",
  "title": "Inverse substitution: indefinite integral.",
  "body": " Inverse substitution: indefinite integral   To compute using inverse substitution, proceed as follows.   Choose a one-to-one, differentiable substitution function with differentiable inverse and assemble the two equations     Compute .    Conclude that . When an explicit formula for is not available, we attempt to compute by rewriting in terms of using the equation .      "
},
{
  "id": "proc_trig_sub",
  "level": "2",
  "url": "s_trig_subst.html#proc_trig_sub",
  "type": "Procedure",
  "number": "1.20.2",
  "title": "Trigonometric substitution.",
  "body": " Trigonometric substitution   The table below indicates potentially helpful inverse substitutions for functions of various types. .   "
},
{
  "id": "proc_ref_triangles",
  "level": "2",
  "url": "s_trig_subst.html#proc_ref_triangles",
  "type": "Procedure",
  "number": "1.20.3",
  "title": "Reference triangles.",
  "body": " Reference triangles   When finishing an integral computation using an trigonometric substitution, the following types of reference triangles are useful for converting your expression back in terms of .  For the sake of space, we only provide examples of reference triangles where the angle lies in . In practice, you should provide a reference triangle diagram that reflects the interval is restricted to, and take care with the sign of the various trigonometric values.    Sine substitution  Consider the substitution , where is positive. A reference diagram like the following helps us see that .   Reference triangle for   Reference triange for sine substitution       Tangent substitution  Consider the substitution , where is positive. A reference diagram like the following allows us to deduce that .   Reference triangle for   Reference triangle for tangent substitution       Secant substitution  Consider the substitution , where is positive. A reference diagram like the following allows us to deduce that    Reference triangle for   Reference triangle for secant substitution        "
},
{
  "id": "proc_inv_sub_def",
  "level": "2",
  "url": "s_trig_subst.html#proc_inv_sub_def",
  "type": "Procedure",
  "number": "1.20.7",
  "title": "Inverse substitution: definite integral.",
  "body": " Inverse substitution: definite integral   To compute using inverse substitution, proceed as follows.   Choose a one-to-one, differentiable substitution function with differentiable inverse and write down the two inverse substitution equations     Conclude that .      "
},
{
  "id": "eg_sin_sub",
  "level": "2",
  "url": "s_trig_subst.html#eg_sin_sub",
  "type": "Example",
  "number": "1.20.8",
  "title": "Sine substitution.",
  "body": " Sine substitution    Find an antiderivative of .     Using we try the inverse substitution with restriction . We compute . Here we have used once again that . Recall that this can be derived using the following reference triangle.  Reference triangle for      "
},
{
  "id": "eg_area_circle",
  "level": "2",
  "url": "s_trig_subst.html#eg_area_circle",
  "type": "Example",
  "number": "1.20.9",
  "title": "Area of circle.",
  "body": " Area of circle   Derive the area formula for a circle of radius .    Let be a circle of radius . Choosing the origin to be the center of , we may assume that has equation . The interior of the circle is the region lying between the graphs of the two function and from to . Using we compute .   "
},
{
  "id": "eg_tan_sub",
  "level": "2",
  "url": "s_trig_subst.html#eg_tan_sub",
  "type": "Example",
  "number": "1.20.10",
  "title": "Tangent substitution.",
  "body": " Tangent substitution   Compute .    Following , we try the inverse substitution , , : . Here we deduce that from the reference triangle for .  Reference triangle for tangent substitution      "
},
{
  "id": "eg_sec_sub_easy",
  "level": "2",
  "url": "s_trig_subst.html#eg_sec_sub_easy",
  "type": "Example",
  "number": "1.20.11",
  "title": "Secant substitution.",
  "body": " Secant substitution   Let be a fixed positive number. Compute .    Following we try the inverse substitution , , : .   "
},
{
  "id": "eg_sec_sub",
  "level": "2",
  "url": "s_trig_subst.html#eg_sec_sub",
  "type": "Example",
  "number": "1.20.12",
  "title": "Secant substitution: definite.",
  "body": " Secant substitution: definite   Compute .    We use the inverse substitution . Solve and for , we see that the new limits of integration are and . Thus we have .   "
},
{
  "id": "eg_sec_sub_again",
  "level": "2",
  "url": "s_trig_subst.html#eg_sec_sub_again",
  "type": "Example",
  "number": "1.20.13",
  "title": "Secant substitution: indefinite.",
  "body": " Secant substitution: indefinite   Find an antiderivative of the function on the domain . The only inverse trigonometric functions allowed to appear in your formula for are and .     To be assigned on written homework.   "
},
{
  "id": "s_rational_functions",
  "level": "1",
  "url": "s_rational_functions.html",
  "type": "Section",
  "number": "1.21",
  "title": "Rational functions",
  "body": " Rational functions   Rational function   A rational function is a function that can be expressed as a quotient of two polynomials.     Polynomial facts      Degree  Suppose with . We call the degree of , denoted .    Roots of polynomials  A polynomial of degree has at most distinct roots.    Equating coefficients  Given polynomials and where and , we have     Irreducible  A nonzero polynomial is irreducible if it cannot be factored into two polynomials of smaller degree. If is an irreducible polynomial with real coefficients, then or .        Partial fraction decomposition   Let be a rational function where .   If factors into non-repeated linear factors as , then there is a unique choice of constants such that .    If factors into non-repeated irreducible linear and quadratic factors as , there there is a unique choice of constants such that .        Partial fraction decomposition   Let be a rational function. To compute the partial fraction decomposition of , proceed as follows.     Polynomial division  Using polynomial division if necessary, write , where , and are polynomials, and .    Factor  Factor into powers of distinct irreducible polynomials.   Factoring trick . If has integer coefficients and a leading coefficient equal to 1, then any integer roots of will be factors of the constant term.    Polynomial equation with undetermined constants  Set up a partial fraction decomposition equation for of form or . Clear the denominators of both sides of the equation, resulting in an identity between two polynomials. The polynomial on the right will be expressed in terms of the unknowns ( , , etc.).    Solve for undetermined constants  To solve for the undetermined constants ( , , etc.) set up and solve a linear system of equations using one of the following techniques.    Evaluate equality at choices of . Evaluate the polynomial equation at various explicit choices of . When factors as where the roots are distinct, then evaluating the polynomial equality at each of the choices will allow you to solve directly for each undetermined constant in turn.     Equate coefficients . Express the polynomial on right in standard form by collecting like terms. For the left and right polynomials to be equal, their corresponding coefficients must all be equal. This yields a system of equations in the unknowns ( , , etc.) that you must now solve.           There is a more general statement of partial fraction decomposition for the case where the irreducible factors of include repeated linear and\/or quadratic terms, but we will not cover it. Consult the textbook if you are curious.    Rational function   Compute     We have . Evaluating the right-hand side at and yields , and thus , . We conclude .     Long division first   Compute     First perform polynomial division with remainder to write . Next, we factor , where . Now perform partial fraction decomposition . Evaluating the last identity at and , we conclude , or equivalently, . We conclude that and , and thus      Three distinct roots   Compute     First we factor . An integer root of must divide , thus we investigate as potential roots. Since , we see that is a root of and thus is a factor of . Performing polynomial division with remainder, we see that . Factoring the quadratic term further, we see that . Now perform partial fractions: . Evaluating this identity at , we see that and thus . Thus .     Two irreducible quadratics   Compute     First note that the denominator , where and are both irreducible. Now perform partial fractions: . Note that in this case we cannot evaluate the identity above at the roots of and since they have none (in the reals)! Instead we use (3) from and produce a linear system by equating the coefficients of two polynomials and : . Equations and together imply . Equation implies ; equation then implies and . We conclude that and thus      With substitution   Compute     Resist the temptation to apply partial fraction decomposition directly to the integrand! Since the integrand is not a rational function, does not apply. Instead we first do an obvious substitution: .    "
},
{
  "id": "d_rational_function",
  "level": "2",
  "url": "s_rational_functions.html#d_rational_function",
  "type": "Definition",
  "number": "1.21.1",
  "title": "Rational function.",
  "body": " Rational function   A rational function is a function that can be expressed as a quotient of two polynomials.   "
},
{
  "id": "th_poly_facts",
  "level": "2",
  "url": "s_rational_functions.html#th_poly_facts",
  "type": "Theorem",
  "number": "1.21.2",
  "title": "Polynomial facts.",
  "body": " Polynomial facts      Degree  Suppose with . We call the degree of , denoted .    Roots of polynomials  A polynomial of degree has at most distinct roots.    Equating coefficients  Given polynomials and where and , we have     Irreducible  A nonzero polynomial is irreducible if it cannot be factored into two polynomials of smaller degree. If is an irreducible polynomial with real coefficients, then or .      "
},
{
  "id": "th_partial_frac",
  "level": "2",
  "url": "s_rational_functions.html#th_partial_frac",
  "type": "Theorem",
  "number": "1.21.3",
  "title": "Partial fraction decomposition.",
  "body": " Partial fraction decomposition   Let be a rational function where .   If factors into non-repeated linear factors as , then there is a unique choice of constants such that .    If factors into non-repeated irreducible linear and quadratic factors as , there there is a unique choice of constants such that .      "
},
{
  "id": "proc_partial_frac",
  "level": "2",
  "url": "s_rational_functions.html#proc_partial_frac",
  "type": "Procedure",
  "number": "1.21.4",
  "title": "Partial fraction decomposition.",
  "body": " Partial fraction decomposition   Let be a rational function. To compute the partial fraction decomposition of , proceed as follows.     Polynomial division  Using polynomial division if necessary, write , where , and are polynomials, and .    Factor  Factor into powers of distinct irreducible polynomials.   Factoring trick . If has integer coefficients and a leading coefficient equal to 1, then any integer roots of will be factors of the constant term.    Polynomial equation with undetermined constants  Set up a partial fraction decomposition equation for of form or . Clear the denominators of both sides of the equation, resulting in an identity between two polynomials. The polynomial on the right will be expressed in terms of the unknowns ( , , etc.).    Solve for undetermined constants  To solve for the undetermined constants ( , , etc.) set up and solve a linear system of equations using one of the following techniques.    Evaluate equality at choices of . Evaluate the polynomial equation at various explicit choices of . When factors as where the roots are distinct, then evaluating the polynomial equality at each of the choices will allow you to solve directly for each undetermined constant in turn.     Equate coefficients . Express the polynomial on right in standard form by collecting like terms. For the left and right polynomials to be equal, their corresponding coefficients must all be equal. This yields a system of equations in the unknowns ( , , etc.) that you must now solve.         "
},
{
  "id": "remark-12",
  "level": "2",
  "url": "s_rational_functions.html#remark-12",
  "type": "Remark",
  "number": "1.21.5",
  "title": "",
  "body": " There is a more general statement of partial fraction decomposition for the case where the irreducible factors of include repeated linear and\/or quadratic terms, but we will not cover it. Consult the textbook if you are curious.  "
},
{
  "id": "eg_rat_func_1",
  "level": "2",
  "url": "s_rational_functions.html#eg_rat_func_1",
  "type": "Example",
  "number": "1.21.6",
  "title": "Rational function.",
  "body": " Rational function   Compute     We have . Evaluating the right-hand side at and yields , and thus , . We conclude .   "
},
{
  "id": "eg_rat_func_4",
  "level": "2",
  "url": "s_rational_functions.html#eg_rat_func_4",
  "type": "Example",
  "number": "1.21.7",
  "title": "Long division first.",
  "body": " Long division first   Compute     First perform polynomial division with remainder to write . Next, we factor , where . Now perform partial fraction decomposition . Evaluating the last identity at and , we conclude , or equivalently, . We conclude that and , and thus    "
},
{
  "id": "eg_rat_func_3",
  "level": "2",
  "url": "s_rational_functions.html#eg_rat_func_3",
  "type": "Example",
  "number": "1.21.8",
  "title": "Three distinct roots.",
  "body": " Three distinct roots   Compute     First we factor . An integer root of must divide , thus we investigate as potential roots. Since , we see that is a root of and thus is a factor of . Performing polynomial division with remainder, we see that . Factoring the quadratic term further, we see that . Now perform partial fractions: . Evaluating this identity at , we see that and thus . Thus .   "
},
{
  "id": "eg_rat_func_2",
  "level": "2",
  "url": "s_rational_functions.html#eg_rat_func_2",
  "type": "Example",
  "number": "1.21.9",
  "title": "Two irreducible quadratics.",
  "body": " Two irreducible quadratics   Compute     First note that the denominator , where and are both irreducible. Now perform partial fractions: . Note that in this case we cannot evaluate the identity above at the roots of and since they have none (in the reals)! Instead we use (3) from and produce a linear system by equating the coefficients of two polynomials and : . Equations and together imply . Equation implies ; equation then implies and . We conclude that and thus    "
},
{
  "id": "eg_rat_func_5",
  "level": "2",
  "url": "s_rational_functions.html#eg_rat_func_5",
  "type": "Example",
  "number": "1.21.10",
  "title": "With substitution.",
  "body": " With substitution   Compute     Resist the temptation to apply partial fraction decomposition directly to the integrand! Since the integrand is not a rational function, does not apply. Instead we first do an obvious substitution: .   "
},
{
  "id": "s_num_int_A",
  "level": "1",
  "url": "s_num_int_A.html",
  "type": "Section",
  "number": "1.22",
  "title": "Numerical integration: techniques",
  "body": " Numerical integration: techniques   Trapezoidal rule   Let be an integrable function on , let be a positive integer, and let be partition of into subintervals of equal length .  The -th trapezoidal estimate of , denoted , is defined as .  The trapezoidal estimate is the result of approximating the graph of with the polygon passing through the points .     Simpson's rule   Let be an integrable function on , let be an even positive integer, and let be partition of into subintervals of equal length .  The -th Simpson's rule estimate of , denoted , is defined as .  The Simpson's rule estimate is the result of approximating the graph of over each of the subintervals with the unique parabolic arc If the three points happen to be colinear, then the parabolic arc will actually be a line. passing through the points .     Trapezoidal and Simpson's rule  Here is a GeoGebra interactive that illustrates the trapezoidal and Simpson's rule techniques for estimating integrals.   GeoGebra: trapezoidal and Simpson's rule      Estimating   Let . Recall that we have by definition . Compute (a) the trapezoidal estimate of , and (b) the Simpson's rule estimate of .    In both cases, to estimate we partition the interval into six subintervals of length as follows: .   The trapezoidal estimate is     The Simpson's rule estimate is    The exact value of is .     Estimating   Let , and let .   Show that .    Estimate using the trapezoidal estimate of .    Estimate using the Simpson's rule estimate of .       First observe that we have . For both estimates we partition the interval into six subintervals of length as follows: . The trapezoidal estimate is then . Similarly, the Simpson's rule estimate is . Compare these to the actual value of .    "
},
{
  "id": "d_trap_rule",
  "level": "2",
  "url": "s_num_int_A.html#d_trap_rule",
  "type": "Definition",
  "number": "1.22.1",
  "title": "Trapezoidal rule.",
  "body": " Trapezoidal rule   Let be an integrable function on , let be a positive integer, and let be partition of into subintervals of equal length .  The -th trapezoidal estimate of , denoted , is defined as .  The trapezoidal estimate is the result of approximating the graph of with the polygon passing through the points .   "
},
{
  "id": "d_Simpsons_rule",
  "level": "2",
  "url": "s_num_int_A.html#d_Simpsons_rule",
  "type": "Definition",
  "number": "1.22.2",
  "title": "Simpson’s rule.",
  "body": " Simpson's rule   Let be an integrable function on , let be an even positive integer, and let be partition of into subintervals of equal length .  The -th Simpson's rule estimate of , denoted , is defined as .  The Simpson's rule estimate is the result of approximating the graph of over each of the subintervals with the unique parabolic arc If the three points happen to be colinear, then the parabolic arc will actually be a line. passing through the points .   "
},
{
  "id": "proj_trap_Simp",
  "level": "2",
  "url": "s_num_int_A.html#proj_trap_Simp",
  "type": "Interactive example",
  "number": "1.22.1",
  "title": "Trapezoidal and Simpson’s rule.",
  "body": " Trapezoidal and Simpson's rule  Here is a GeoGebra interactive that illustrates the trapezoidal and Simpson's rule techniques for estimating integrals.   GeoGebra: trapezoidal and Simpson's rule    "
},
{
  "id": "eg_est_ln",
  "level": "2",
  "url": "s_num_int_A.html#eg_est_ln",
  "type": "Example",
  "number": "1.22.4",
  "title": "Estimating <span class=\"process-math\">\\(\\ln 4\\)<\/span>.",
  "body": " Estimating   Let . Recall that we have by definition . Compute (a) the trapezoidal estimate of , and (b) the Simpson's rule estimate of .    In both cases, to estimate we partition the interval into six subintervals of length as follows: .   The trapezoidal estimate is     The Simpson's rule estimate is    The exact value of is .   "
},
{
  "id": "eg_est_pi",
  "level": "2",
  "url": "s_num_int_A.html#eg_est_pi",
  "type": "Example",
  "number": "1.22.5",
  "title": "Estimating <span class=\"process-math\">\\(\\pi\\)<\/span>.",
  "body": " Estimating   Let , and let .   Show that .    Estimate using the trapezoidal estimate of .    Estimate using the Simpson's rule estimate of .       First observe that we have . For both estimates we partition the interval into six subintervals of length as follows: . The trapezoidal estimate is then . Similarly, the Simpson's rule estimate is . Compare these to the actual value of .   "
},
{
  "id": "s_num_int_B",
  "level": "1",
  "url": "s_num_int_B.html",
  "type": "Section",
  "number": "1.23",
  "title": "Numerical integration: error bounds",
  "body": " Numerical integration: error bounds   Error bounds   Let be an integrable function on , let be a positive integer, and let . be partition of into subintervals of equal length .   Right\/left Riemann sums  Let be either the right or left Riemann sum for this partition. If is continuous and for all in , then .    Midpoint Riemann sum  Let be the midpoint Riemann sum for this partition. If is continuous and for all in , then .    Trapezoidal estimate  Let be the -th trapezoidal estimate of . If is continuous and for all in , then .    Simpson's rule  Suppose is even, and let be the -th Simpson's rule estimate of . If is continuous and for all in , then .        Estimating : error bounds   Let . Recall that .  Compute bounds for the errors in (a) the trapezoidal estimate of and (b) the Simpson's rule estimate of .    Throughout, let , let be the -th trapezoidal estimate of , and let be the -th Simpson's rule estimate of .   To bound the error estimate we first must find an upper bound of on . Since is decreasing and positive on , it attains its largest value at , the left endpoint of the interval. We conclude that and thus we may take in the error bound formula . Thus . We conclude that is at most  off of the true value of . Using the computational cell in you can see that in fact we have . We are of course not bothered by the fact that the true error is significantly less than the error bound provided by . The theorem says simply the error can be no worse than .    To bound the error we must first find a bound of on . The logic is similar to the above: on we have , which is a positive decreasing function. Thus and we may take in the error bound . We now have . Again, using , we can see that the actual error in our estimate is : significantly smaller than the error bound provided by .        Estimating : error bounds   Let . We have .   Recall that . Compute bounds for the errors in estimating using (a) the trapezoidal rule, and (b) the Simpson's rule.    Find (a) an such that the -th trapezoidal estimate of is within of the actual value, and (b) an such that the -th Simpson's rule estimate of is within of the actual value.       Throughout, let , let be the -th trapezoidal estimate of , and let be the -th Simpson's rule estimate of .    For the error bound for we first compute . Note: the inequality was derived simply by graphing the quadratic function on . Taking in , we compute . Using we see that the actual error satisfies .  For the error bound for we first compute . Taking in , we compute . Using we see that the actual error satisfies .    Using our bounds on and from above, we have using  .      "
},
{
  "id": "th_error_bound",
  "level": "2",
  "url": "s_num_int_B.html#th_error_bound",
  "type": "Theorem",
  "number": "1.23.1",
  "title": "Error bounds.",
  "body": " Error bounds   Let be an integrable function on , let be a positive integer, and let . be partition of into subintervals of equal length .   Right\/left Riemann sums  Let be either the right or left Riemann sum for this partition. If is continuous and for all in , then .    Midpoint Riemann sum  Let be the midpoint Riemann sum for this partition. If is continuous and for all in , then .    Trapezoidal estimate  Let be the -th trapezoidal estimate of . If is continuous and for all in , then .    Simpson's rule  Suppose is even, and let be the -th Simpson's rule estimate of . If is continuous and for all in , then .      "
},
{
  "id": "eg_log_error",
  "level": "2",
  "url": "s_num_int_B.html#eg_log_error",
  "type": "Example",
  "number": "1.23.2",
  "title": "Estimating <span class=\"process-math\">\\(\\ln 4\\text{:}\\)<\/span> error bounds.",
  "body": " Estimating : error bounds   Let . Recall that .  Compute bounds for the errors in (a) the trapezoidal estimate of and (b) the Simpson's rule estimate of .    Throughout, let , let be the -th trapezoidal estimate of , and let be the -th Simpson's rule estimate of .   To bound the error estimate we first must find an upper bound of on . Since is decreasing and positive on , it attains its largest value at , the left endpoint of the interval. We conclude that and thus we may take in the error bound formula . Thus . We conclude that is at most  off of the true value of . Using the computational cell in you can see that in fact we have . We are of course not bothered by the fact that the true error is significantly less than the error bound provided by . The theorem says simply the error can be no worse than .    To bound the error we must first find a bound of on . The logic is similar to the above: on we have , which is a positive decreasing function. Thus and we may take in the error bound . We now have . Again, using , we can see that the actual error in our estimate is : significantly smaller than the error bound provided by .      "
},
{
  "id": "eg_pi_error",
  "level": "2",
  "url": "s_num_int_B.html#eg_pi_error",
  "type": "Example",
  "number": "1.23.3",
  "title": "Estimating <span class=\"process-math\">\\(\\pi\\text{:}\\)<\/span> error bounds.",
  "body": " Estimating : error bounds   Let . We have .   Recall that . Compute bounds for the errors in estimating using (a) the trapezoidal rule, and (b) the Simpson's rule.    Find (a) an such that the -th trapezoidal estimate of is within of the actual value, and (b) an such that the -th Simpson's rule estimate of is within of the actual value.       Throughout, let , let be the -th trapezoidal estimate of , and let be the -th Simpson's rule estimate of .    For the error bound for we first compute . Note: the inequality was derived simply by graphing the quadratic function on . Taking in , we compute . Using we see that the actual error satisfies .  For the error bound for we first compute . Taking in , we compute . Using we see that the actual error satisfies .    Using our bounds on and from above, we have using  .     "
},
{
  "id": "s_improper_A",
  "level": "1",
  "url": "s_improper_A.html",
  "type": "Section",
  "number": "1.24",
  "title": "Improper integrals",
  "body": " Improper integrals   Improper integral of type I: infinite intervals   Below we define definite integrals over infinite intervals. These are called improper integrals of type I , or integrals over infinite intervals .   Interval  Let be continuous on the interval . The integral of over , denoted , is said to converge if the limit exists, in which case we define . If the limit does not exist, we say the improper integral diverges .    Interval  Let be continuous on the interval . The integral of over , denoted , is said to converge if the limit exists, in which case we define . If the limit does not exist, we say the improper integral diverges .    Real line  Let be continuous on the real line . The integral of over , denoted , is said to converge if both of the half-infinite integrals and converge for some real number . In this case we define . If either (or both) of the half-infinite integrals diverge, we say that the integral of over  diverges .        Improper integral: type I   To evaluate an improper integral of the form or , proceed as follows.   Compute the relevant definite integral , that is or , as an expression in terms of .    Investigate the relevant limit .    If the relevant limit does not exist, conclude that the improper integral diverges. Otherwise, conclude that the improper integral is equal to the relevant limit: , .   To evaluate a definite integral of the form , pick any real number , and apply the proceeding to both and . The improper integral over exists if and only if both of these half-infinite integrals exist, in which case it is equal to their sum.     Type I: half-infinite   Evaluate .    We follow .   Compute .    Compute .    We conclude that the improper integral converges and has value .        Type I: -test   Evaluate for .    First consider . It follows that . We conclude that .    Simply by changing the lower limit of integration in from to , we have essentially derived the type I statement of the -test theorem .   Type I: real line integral   Evaluate .    Let . Using we evaluate and separately. Observe that is an antiderivative of .  We have . Similarly, we have . Since both half-infinite improper integrals converge, we conclude that the given improper integral converges and has value .     Improper integrals of type II: discontinuities   Assume is continuous on the interval , except possibly at one point.   Assume is not continuous at . The integral of over , denoted , is said to converge if the limit , exists, in which case we define . If the limit does not exist, we say the improper integral diverges .    Assume is not continuous at . The integral of over , denoted , is said to converge if the limit , exists, in which case we define . If the limit does not exist, we say the improper integral diverges .    Assume is not continuous at . The integral of over , denoted , is said to converge if both improper integrals and converge, in which case we define . Otherwise, we say that the integral over the entire interval diverges .        Area interpretation of improper integrals   Let be defined on an interval for which the corresponding integral is improper, and let be the (potentially unbounded) region between the graph of and the -axis over the interval .   We define the area (or total area ) of to be the integral of over , assuming this integral converges.    We define the signed area of to be the integral of over , assuming this interval converges.        Improper integral: type II   To evaluate an improper integral of the form , where fails to be continuous at at most one of the endpoints of , proceed as follows.   Compute the relevant definite integral, that is or , as an expression in terms of .    Investigate the relevant limit .    If the relevant limit does not exist, conclude that the improper integral diverges. Otherwise, conclude that the improper integral is equal to the relevant limit: , .   To evaluate a definite integral of the form , where is continuous everywhere except at , apply the proceeding to both and . The improper integral over the exists if and only if both of these smaller interval integrals exist, in which case it is equal to their sum.     Improper: type II   Evaluate .    Let . Observe that the integral is improper because is not defined at ; this is clearly the sole impropriety. Using definition we look at the improper integrals and separately. Observe that is an antiderivative of .  We have Since diverges, we conclude that diverges, by definition.     Improper: type II   Evaluate .    The integral is improper as is not defined at . We follow .   Compute .    Compute .    We conclude that the improper integral converges and has value . Geometrically, this tells us that the signed area of the region between the graph of and the -axis, and between the lines and is . Since this region lies entirely below the -axis, we see that its area is equal to 1.      Graph of natural log       Improper: type II   Evaluate .    Let . The integral is improper as the integrand is not defined at . This is the only impropriety. Following , we treat the improper integrals and separately. Observe that is an antiderivative of .  First compute . Next, we compute . Since both integrals converge, we conclude that converges and has value . Geometrically, this result can be interpreted as the signed area of the region between the graph of and the -axis, and between the lines and . Our analysis tells us that the areas of the two regions on either side of the vertical asymptote are both finite. The diagram below then indicates that the signed area should be positive. Our integral computation is consistent with this since .   Graph of example integrand      Improper integrals (of both types) of power functions of the form arise frequently enough to warrant their own theorem: the -test theorem . As mentioned above the type I statement of the was effectively proved in one of our earlier examples. The derivation of the type II statement is very similar.   Improper integrals: -test   Let and be any positive numbers.   Type I  We have .    Type II  We have .       "
},
{
  "id": "d_improper_type_I",
  "level": "2",
  "url": "s_improper_A.html#d_improper_type_I",
  "type": "Definition",
  "number": "1.24.1",
  "title": "Improper integral of type I: infinite intervals.",
  "body": " Improper integral of type I: infinite intervals   Below we define definite integrals over infinite intervals. These are called improper integrals of type I , or integrals over infinite intervals .   Interval  Let be continuous on the interval . The integral of over , denoted , is said to converge if the limit exists, in which case we define . If the limit does not exist, we say the improper integral diverges .    Interval  Let be continuous on the interval . The integral of over , denoted , is said to converge if the limit exists, in which case we define . If the limit does not exist, we say the improper integral diverges .    Real line  Let be continuous on the real line . The integral of over , denoted , is said to converge if both of the half-infinite integrals and converge for some real number . In this case we define . If either (or both) of the half-infinite integrals diverge, we say that the integral of over  diverges .      "
},
{
  "id": "proc_improper_type_I",
  "level": "2",
  "url": "s_improper_A.html#proc_improper_type_I",
  "type": "Procedure",
  "number": "1.24.2",
  "title": "Improper integral: type I.",
  "body": " Improper integral: type I   To evaluate an improper integral of the form or , proceed as follows.   Compute the relevant definite integral , that is or , as an expression in terms of .    Investigate the relevant limit .    If the relevant limit does not exist, conclude that the improper integral diverges. Otherwise, conclude that the improper integral is equal to the relevant limit: , .   To evaluate a definite integral of the form , pick any real number , and apply the proceeding to both and . The improper integral over exists if and only if both of these half-infinite integrals exist, in which case it is equal to their sum.   "
},
{
  "id": "eg_improper_type_I_1",
  "level": "2",
  "url": "s_improper_A.html#eg_improper_type_I_1",
  "type": "Example",
  "number": "1.24.3",
  "title": "Type I: half-infinite.",
  "body": " Type I: half-infinite   Evaluate .    We follow .   Compute .    Compute .    We conclude that the improper integral converges and has value .      "
},
{
  "id": "eg_improper_type_I_ptest",
  "level": "2",
  "url": "s_improper_A.html#eg_improper_type_I_ptest",
  "type": "Example",
  "number": "1.24.4",
  "title": "Type I: <span class=\"process-math\">\\(p\\)<\/span>-test.",
  "body": " Type I: -test   Evaluate for .    First consider . It follows that . We conclude that .   "
},
{
  "id": "eg_improper_type_I_3",
  "level": "2",
  "url": "s_improper_A.html#eg_improper_type_I_3",
  "type": "Example",
  "number": "1.24.5",
  "title": "Type I: real line integral.",
  "body": " Type I: real line integral   Evaluate .    Let . Using we evaluate and separately. Observe that is an antiderivative of .  We have . Similarly, we have . Since both half-infinite improper integrals converge, we conclude that the given improper integral converges and has value .   "
},
{
  "id": "d_improper_type_II",
  "level": "2",
  "url": "s_improper_A.html#d_improper_type_II",
  "type": "Definition",
  "number": "1.24.6",
  "title": "Improper integrals of type II: discontinuities.",
  "body": " Improper integrals of type II: discontinuities   Assume is continuous on the interval , except possibly at one point.   Assume is not continuous at . The integral of over , denoted , is said to converge if the limit , exists, in which case we define . If the limit does not exist, we say the improper integral diverges .    Assume is not continuous at . The integral of over , denoted , is said to converge if the limit , exists, in which case we define . If the limit does not exist, we say the improper integral diverges .    Assume is not continuous at . The integral of over , denoted , is said to converge if both improper integrals and converge, in which case we define . Otherwise, we say that the integral over the entire interval diverges .      "
},
{
  "id": "d_improper_area",
  "level": "2",
  "url": "s_improper_A.html#d_improper_area",
  "type": "Definition",
  "number": "1.24.7",
  "title": "Area interpretation of improper integrals.",
  "body": " Area interpretation of improper integrals   Let be defined on an interval for which the corresponding integral is improper, and let be the (potentially unbounded) region between the graph of and the -axis over the interval .   We define the area (or total area ) of to be the integral of over , assuming this integral converges.    We define the signed area of to be the integral of over , assuming this interval converges.      "
},
{
  "id": "proc_improper_type_II",
  "level": "2",
  "url": "s_improper_A.html#proc_improper_type_II",
  "type": "Procedure",
  "number": "1.24.8",
  "title": "Improper integral: type II.",
  "body": " Improper integral: type II   To evaluate an improper integral of the form , where fails to be continuous at at most one of the endpoints of , proceed as follows.   Compute the relevant definite integral, that is or , as an expression in terms of .    Investigate the relevant limit .    If the relevant limit does not exist, conclude that the improper integral diverges. Otherwise, conclude that the improper integral is equal to the relevant limit: , .   To evaluate a definite integral of the form , where is continuous everywhere except at , apply the proceeding to both and . The improper integral over the exists if and only if both of these smaller interval integrals exist, in which case it is equal to their sum.   "
},
{
  "id": "eg_improper_type_II_1",
  "level": "2",
  "url": "s_improper_A.html#eg_improper_type_II_1",
  "type": "Example",
  "number": "1.24.9",
  "title": "Improper: type II.",
  "body": " Improper: type II   Evaluate .    Let . Observe that the integral is improper because is not defined at ; this is clearly the sole impropriety. Using definition we look at the improper integrals and separately. Observe that is an antiderivative of .  We have Since diverges, we conclude that diverges, by definition.   "
},
{
  "id": "eg_improper_type_II_2",
  "level": "2",
  "url": "s_improper_A.html#eg_improper_type_II_2",
  "type": "Example",
  "number": "1.24.10",
  "title": "Improper: type II.",
  "body": " Improper: type II   Evaluate .    The integral is improper as is not defined at . We follow .   Compute .    Compute .    We conclude that the improper integral converges and has value . Geometrically, this tells us that the signed area of the region between the graph of and the -axis, and between the lines and is . Since this region lies entirely below the -axis, we see that its area is equal to 1.      Graph of natural log     "
},
{
  "id": "eg_improper_type_II_3",
  "level": "2",
  "url": "s_improper_A.html#eg_improper_type_II_3",
  "type": "Example",
  "number": "1.24.11",
  "title": "Improper: type II.",
  "body": " Improper: type II   Evaluate .    Let . The integral is improper as the integrand is not defined at . This is the only impropriety. Following , we treat the improper integrals and separately. Observe that is an antiderivative of .  First compute . Next, we compute . Since both integrals converge, we conclude that converges and has value . Geometrically, this result can be interpreted as the signed area of the region between the graph of and the -axis, and between the lines and . Our analysis tells us that the areas of the two regions on either side of the vertical asymptote are both finite. The diagram below then indicates that the signed area should be positive. Our integral computation is consistent with this since .   Graph of example integrand     "
},
{
  "id": "th_improper_p_test",
  "level": "2",
  "url": "s_improper_A.html#th_improper_p_test",
  "type": "Theorem",
  "number": "1.24.12",
  "title": "Improper integrals: <span class=\"process-math\">\\(p\\)<\/span>-test.",
  "body": " Improper integrals: -test   Let and be any positive numbers.   Type I  We have .    Type II  We have .      "
},
{
  "id": "s_improper_B",
  "level": "1",
  "url": "s_improper_B.html",
  "type": "Section",
  "number": "1.25",
  "title": "Improper integrals: convergence tests",
  "body": " Improper integrals: convergence tests   Direct comparison test   Let and be nonnegative functions on an interval , and suppose for all in . If the integral of over converges, then the integral of over converges. Using logical notation: .  Equivalently, using the contrapositive of , we have .     Direct comparison test   Decide whether converges.    Observe that . Since converges by the -test , implies that converges.     Direct comparison test   Decide whether converges.    Observe that we have . Since diverges by the -test , implies that diverges.     Limit comparison test   Let and be continuous and positive on the interval .   If and with , then .    If and with , then .    If and with , then .    If and with , then .        Limit comparison test: type I   Assume is positive and continuous on . To decide whether converges using the limit comparison test, proceed as follows.   Find a simpler continuous function that is limit-comparable to : , a function satisfying .    Useful intuition to help find the function : as , larger positive powers of dominate smaller positive powers of , exponential functions dominate power functions, and positive powers of dominate logarithmic functions.    Conclude that converges if and only if converges.        Limit comparison test: type II   Assume is positive and continuous on the interval . To decide whether converges using the limit comparison test, proceed as follows.   Find a simpler continuous function that is limit-comparable to : , a function satisfying .    Useful intuition to help find the function : as , smaller positive powers of dominate larger positive powers of .    Conclude that converges if and only if converges.        Limit comparison test   Decide whether converges.    Note that the integral is doubly improper: the integrand is not defined at , and the interval is infinite. Accordingly we look at the improper integrals and separately. As it turns out, the converge question for both improper integrals can be decided using the direct comparison test, but we will use the limit comparison test just by way of illustration.  For the improper integral , our intution is that as the term dominates the term. As such, we expect to be limit-comparable to . Since converges by the -test, it will then follow that converges. It remains only to confirm that and are limit-comparable: .  For the integral , our intuition is that as the term dominates the term. Thus we suspect that should be limit-comparable to (the constant 3 here is not important). Let's confirm: . This shows and are limit-comparable. Since converges by the -test, the limit comparison test implies converges.     Limit comparison test   Decide whether .    This example is designed to force us to use the limit comparison test: because of the minus sign in the denominator, we cannot make use of any useful inequality that would allow us to use the direct comparison test. Note that for we have , and thus the integrand is continuous on . Our intuition is that the term dominates as , and thus that is limit-comparable to as . Let's confirm this: . This proves that and are limit-comparable as . Since converges by the type-II -test, we conclude that converges.     Limit comparison test   Let be any fixed irreducible quadratic polynomial with . Decide whether exists.    First observe that since is irreducible, we have for all . Thus the given integral is improper only on account of the infinite interval. Furthermore, since , it follows that is positive eventually; since is never equal to zero, it must always be positive; this means we are in a situation where we can apply the limit comparison test. As usual, we consider the two improper integrals and separately. In both cases our intuition tells us that the term will dominate as , and thus that the is limit-comparable to as and as . We confirm both these suspicions simultaneously below: . Now consider first the improper integral . The first integral is not improper at all ( is continuous on ) and so converges. Since converges and is limit-comparable to as , we see by the direct limit comparison test that the second integral converges. We conclude that converges.  A very similar analysis shows that also converges. Note, however, that technically we cannot use the type-I -test, since it is only stated for integrals over intervals of the form . Instead we must show directly that converges, which is not hard to do.  In all, we see that both and converge, and hence converges.    "
},
{
  "id": "th_direct_comp",
  "level": "2",
  "url": "s_improper_B.html#th_direct_comp",
  "type": "Theorem",
  "number": "1.25.1",
  "title": "Direct comparison test.",
  "body": " Direct comparison test   Let and be nonnegative functions on an interval , and suppose for all in . If the integral of over converges, then the integral of over converges. Using logical notation: .  Equivalently, using the contrapositive of , we have .   "
},
{
  "id": "eg_direct_comp_1",
  "level": "2",
  "url": "s_improper_B.html#eg_direct_comp_1",
  "type": "Example",
  "number": "1.25.2",
  "title": "Direct comparison test.",
  "body": " Direct comparison test   Decide whether converges.    Observe that . Since converges by the -test , implies that converges.   "
},
{
  "id": "eg_direct_comp_2",
  "level": "2",
  "url": "s_improper_B.html#eg_direct_comp_2",
  "type": "Example",
  "number": "1.25.3",
  "title": "Direct comparison test.",
  "body": " Direct comparison test   Decide whether converges.    Observe that we have . Since diverges by the -test , implies that diverges.   "
},
{
  "id": "th_limit_comp",
  "level": "2",
  "url": "s_improper_B.html#th_limit_comp",
  "type": "Theorem",
  "number": "1.25.4",
  "title": "Limit comparison test.",
  "body": " Limit comparison test   Let and be continuous and positive on the interval .   If and with , then .    If and with , then .    If and with , then .    If and with , then .      "
},
{
  "id": "proc_limit_comp_I",
  "level": "2",
  "url": "s_improper_B.html#proc_limit_comp_I",
  "type": "Procedure",
  "number": "1.25.5",
  "title": "Limit comparison test: type I.",
  "body": " Limit comparison test: type I   Assume is positive and continuous on . To decide whether converges using the limit comparison test, proceed as follows.   Find a simpler continuous function that is limit-comparable to : , a function satisfying .    Useful intuition to help find the function : as , larger positive powers of dominate smaller positive powers of , exponential functions dominate power functions, and positive powers of dominate logarithmic functions.    Conclude that converges if and only if converges.      "
},
{
  "id": "proc_limit_comp_II",
  "level": "2",
  "url": "s_improper_B.html#proc_limit_comp_II",
  "type": "Procedure",
  "number": "1.25.6",
  "title": "Limit comparison test: type II.",
  "body": " Limit comparison test: type II   Assume is positive and continuous on the interval . To decide whether converges using the limit comparison test, proceed as follows.   Find a simpler continuous function that is limit-comparable to : , a function satisfying .    Useful intuition to help find the function : as , smaller positive powers of dominate larger positive powers of .    Conclude that converges if and only if converges.      "
},
{
  "id": "eg_limit_comp_1",
  "level": "2",
  "url": "s_improper_B.html#eg_limit_comp_1",
  "type": "Example",
  "number": "1.25.7",
  "title": "Limit comparison test.",
  "body": " Limit comparison test   Decide whether converges.    Note that the integral is doubly improper: the integrand is not defined at , and the interval is infinite. Accordingly we look at the improper integrals and separately. As it turns out, the converge question for both improper integrals can be decided using the direct comparison test, but we will use the limit comparison test just by way of illustration.  For the improper integral , our intution is that as the term dominates the term. As such, we expect to be limit-comparable to . Since converges by the -test, it will then follow that converges. It remains only to confirm that and are limit-comparable: .  For the integral , our intuition is that as the term dominates the term. Thus we suspect that should be limit-comparable to (the constant 3 here is not important). Let's confirm: . This shows and are limit-comparable. Since converges by the -test, the limit comparison test implies converges.   "
},
{
  "id": "eg_limit_comp_2",
  "level": "2",
  "url": "s_improper_B.html#eg_limit_comp_2",
  "type": "Example",
  "number": "1.25.8",
  "title": "Limit comparison test.",
  "body": " Limit comparison test   Decide whether .    This example is designed to force us to use the limit comparison test: because of the minus sign in the denominator, we cannot make use of any useful inequality that would allow us to use the direct comparison test. Note that for we have , and thus the integrand is continuous on . Our intuition is that the term dominates as , and thus that is limit-comparable to as . Let's confirm this: . This proves that and are limit-comparable as . Since converges by the type-II -test, we conclude that converges.   "
},
{
  "id": "eg_limit_comp_3",
  "level": "2",
  "url": "s_improper_B.html#eg_limit_comp_3",
  "type": "Example",
  "number": "1.25.9",
  "title": "Limit comparison test.",
  "body": " Limit comparison test   Let be any fixed irreducible quadratic polynomial with . Decide whether exists.    First observe that since is irreducible, we have for all . Thus the given integral is improper only on account of the infinite interval. Furthermore, since , it follows that is positive eventually; since is never equal to zero, it must always be positive; this means we are in a situation where we can apply the limit comparison test. As usual, we consider the two improper integrals and separately. In both cases our intuition tells us that the term will dominate as , and thus that the is limit-comparable to as and as . We confirm both these suspicions simultaneously below: . Now consider first the improper integral . The first integral is not improper at all ( is continuous on ) and so converges. Since converges and is limit-comparable to as , we see by the direct limit comparison test that the second integral converges. We conclude that converges.  A very similar analysis shows that also converges. Note, however, that technically we cannot use the type-I -test, since it is only stated for integrals over intervals of the form . Instead we must show directly that converges, which is not hard to do.  In all, we see that both and converge, and hence converges.   "
},
{
  "id": "s_linear_diff_eq",
  "level": "1",
  "url": "s_linear_diff_eq.html",
  "type": "Section",
  "number": "1.26",
  "title": "First-order linear differential equations",
  "body": " First-order linear differential equations   First-order linear equation   A first-order linear differential equation for the function is a differential equation that can be written in the form for some functions and . Equation is called the standard form of the equation.     Integrating factor   Consider a first-order linear equation with standard form .  An integrating factor for this equation is any function of the form , where is an antiderivative of .  As a somewhat liberal usage of indefinite integral notation, we sometimes write .     Solving first-order linear equations   Suppose are continuous on the interval . To solve the differential equation with standard form , proceed as follows.   Compute .    Set .    The function is a solution of if and only if it is a solution of .    Compute . Since is the general solution of , the general solution of is , where is any constant.  As a somewhat liberal usage of indefinite integral notation, we sometimes write .        Exponential change revisited   Use the integrating factor method to find the general solution to , where is any fixed nonzero constant.    Observe that this differential equation is both linear and separable, but we are asked here to use the linear differential equation technique for solving The standard form of the differential equation is . Clearly, is an antiderivative of , so we set . Next we compute . Finally, we conclude that the general solution is . This should come as no surprise: we have re-derived the general solution to the exponential change differential equation .     Non-separable example   Find the general solution to the differential equation .    Following we first bring the differential equation into standard form: . We then compute , and thus set . Next, we compute . Finally, we conclude that the general solution is given by . Note in particular that setting , we see that the polynomial is a solution to the differential equation.     Initial value   Consider the differential equation .   Find the general solution to the differential equation.    Find the solution satisfying .       First we bring the differential equation into standard form: . Since is an antiderivative of , we set the integrating factor to be , where the minus sign arises due to the fact that we assume , and hence . Next we compute (using integration by parts twice) . We conclude that the general solution is given by . Finally, the condition implies that , and thus .    "
},
{
  "id": "d_lin_diff_eq",
  "level": "2",
  "url": "s_linear_diff_eq.html#d_lin_diff_eq",
  "type": "Definition",
  "number": "1.26.1",
  "title": "First-order linear equation.",
  "body": " First-order linear equation   A first-order linear differential equation for the function is a differential equation that can be written in the form for some functions and . Equation is called the standard form of the equation.   "
},
{
  "id": "d_int_factor",
  "level": "2",
  "url": "s_linear_diff_eq.html#d_int_factor",
  "type": "Definition",
  "number": "1.26.2",
  "title": "Integrating factor.",
  "body": " Integrating factor   Consider a first-order linear equation with standard form .  An integrating factor for this equation is any function of the form , where is an antiderivative of .  As a somewhat liberal usage of indefinite integral notation, we sometimes write .   "
},
{
  "id": "proc_lin_diff_eq",
  "level": "2",
  "url": "s_linear_diff_eq.html#proc_lin_diff_eq",
  "type": "Procedure",
  "number": "1.26.3",
  "title": "Solving first-order linear equations.",
  "body": " Solving first-order linear equations   Suppose are continuous on the interval . To solve the differential equation with standard form , proceed as follows.   Compute .    Set .    The function is a solution of if and only if it is a solution of .    Compute . Since is the general solution of , the general solution of is , where is any constant.  As a somewhat liberal usage of indefinite integral notation, we sometimes write .      "
},
{
  "id": "eg_exp_growth_revisited",
  "level": "2",
  "url": "s_linear_diff_eq.html#eg_exp_growth_revisited",
  "type": "Example",
  "number": "1.26.4",
  "title": "Exponential change revisited.",
  "body": " Exponential change revisited   Use the integrating factor method to find the general solution to , where is any fixed nonzero constant.    Observe that this differential equation is both linear and separable, but we are asked here to use the linear differential equation technique for solving The standard form of the differential equation is . Clearly, is an antiderivative of , so we set . Next we compute . Finally, we conclude that the general solution is . This should come as no surprise: we have re-derived the general solution to the exponential change differential equation .   "
},
{
  "id": "eg_lin_diff_eq",
  "level": "2",
  "url": "s_linear_diff_eq.html#eg_lin_diff_eq",
  "type": "Example",
  "number": "1.26.5",
  "title": "Non-separable example.",
  "body": " Non-separable example   Find the general solution to the differential equation .    Following we first bring the differential equation into standard form: . We then compute , and thus set . Next, we compute . Finally, we conclude that the general solution is given by . Note in particular that setting , we see that the polynomial is a solution to the differential equation.   "
},
{
  "id": "eg_non_separable",
  "level": "2",
  "url": "s_linear_diff_eq.html#eg_non_separable",
  "type": "Example",
  "number": "1.26.6",
  "title": "Initial value.",
  "body": " Initial value   Consider the differential equation .   Find the general solution to the differential equation.    Find the solution satisfying .       First we bring the differential equation into standard form: . Since is an antiderivative of , we set the integrating factor to be , where the minus sign arises due to the fact that we assume , and hence . Next we compute (using integration by parts twice) . We conclude that the general solution is given by . Finally, the condition implies that , and thus .   "
},
{
  "id": "s_modeling",
  "level": "1",
  "url": "s_modeling.html",
  "type": "Section",
  "number": "1.27",
  "title": "Modeling with differential equations",
  "body": " Modeling with differential equations   Modeling with first-order differential equations   Many applications present information about a quantity in a form that can be modeled by a first-order differential equation. Here is an outline of the steps to take in these settings.   Explicitly identify the quantity under consideration as a function of some other quantity , and give a name to this function: .    Translate the given information about into a first-order differential equation: . This is often the trickiest step!   Look for phrases that indicate rate of change of and translate these into equalities involving .    When there is a combination of components to the rate of change, a diagram may be useful.    Translate phrases like is proportional to as , where is the (possibly undetermined) constant of proportionality.       Ask yourself whether the differential equation is linear or separable. If so, use the appropriate technique to solve it in as general a form as you can.   If the equation is both separable and linear, you can use either method. It is often quicker to use the separation of variables technique.    If the differential equation is linear, make sure to bring it into standard form before using the integrating factor method.       Once you have solved you will have a formula for that includes some undetermined constants. If possible, use any additional information given about to determine these undetermined constants.        Mixing problem   A large tank in a pickle factory initially contains 50 liters of brine in which 20 kg of salt is dissolved. The mixture is kept uniform by stirring. Brine containing 0.2 kg of dissolved salt per liter enters the tank at a rate of 10 liters per minute. At the same time the mixture from the tank leaves at a rate of 6 liters per minute. How much salt is in the tank after 30 minutes.         Trout population   Left to their own devices, the population of trout in the Straits of Dudley increases at a rate of of the present population. A recent oil spill, however, has resulted in an ongoing depletion of the population: specifically, months after the spill the trout are dying off at a rate of fish per month.   Derive a differential equation describing trout population in the Strait of Dudley, considered as a function of the time (in months) since the oil spill. You may assume the oil spill has not affected the trout population's breeding habits.    Derive a formula for the population of trout months after the oil spill, assuming that at the moment of the spill there were six thousand fish in the Strait of Dudley.            Spreading rumor   A false rumor is being spread within a certain university community. Let be the percentage (from 0 to 100) of the community that has heard the rumor days after the rumor is introduced. Assume that percentage of the population that has heard the rumor grows at a rate proportional to the product of the current percentage of those in the know with the current percentage of those not in the know.   Write down a differential equation for . Use as your constant of proportionality.    Derive a formula for assuming that at time five percent of the population has heard the rumor. Your answer will be expressed in terms of and .    Investigate the long-term behavior of the rumor's spread. Is there a time when the entire population has heard the rumor?            "
},
{
  "id": "proc_modeling_diff_eq",
  "level": "2",
  "url": "s_modeling.html#proc_modeling_diff_eq",
  "type": "Procedure",
  "number": "1.27.1",
  "title": "Modeling with first-order differential equations.",
  "body": " Modeling with first-order differential equations   Many applications present information about a quantity in a form that can be modeled by a first-order differential equation. Here is an outline of the steps to take in these settings.   Explicitly identify the quantity under consideration as a function of some other quantity , and give a name to this function: .    Translate the given information about into a first-order differential equation: . This is often the trickiest step!   Look for phrases that indicate rate of change of and translate these into equalities involving .    When there is a combination of components to the rate of change, a diagram may be useful.    Translate phrases like is proportional to as , where is the (possibly undetermined) constant of proportionality.       Ask yourself whether the differential equation is linear or separable. If so, use the appropriate technique to solve it in as general a form as you can.   If the equation is both separable and linear, you can use either method. It is often quicker to use the separation of variables technique.    If the differential equation is linear, make sure to bring it into standard form before using the integrating factor method.       Once you have solved you will have a formula for that includes some undetermined constants. If possible, use any additional information given about to determine these undetermined constants.      "
},
{
  "id": "example-98",
  "level": "2",
  "url": "s_modeling.html#example-98",
  "type": "Example",
  "number": "1.27.2",
  "title": "Mixing problem.",
  "body": " Mixing problem   A large tank in a pickle factory initially contains 50 liters of brine in which 20 kg of salt is dissolved. The mixture is kept uniform by stirring. Brine containing 0.2 kg of dissolved salt per liter enters the tank at a rate of 10 liters per minute. At the same time the mixture from the tank leaves at a rate of 6 liters per minute. How much salt is in the tank after 30 minutes.       "
},
{
  "id": "example-99",
  "level": "2",
  "url": "s_modeling.html#example-99",
  "type": "Example",
  "number": "1.27.3",
  "title": "Trout population.",
  "body": " Trout population   Left to their own devices, the population of trout in the Straits of Dudley increases at a rate of of the present population. A recent oil spill, however, has resulted in an ongoing depletion of the population: specifically, months after the spill the trout are dying off at a rate of fish per month.   Derive a differential equation describing trout population in the Strait of Dudley, considered as a function of the time (in months) since the oil spill. You may assume the oil spill has not affected the trout population's breeding habits.    Derive a formula for the population of trout months after the oil spill, assuming that at the moment of the spill there were six thousand fish in the Strait of Dudley.          "
},
{
  "id": "example-100",
  "level": "2",
  "url": "s_modeling.html#example-100",
  "type": "Example",
  "number": "1.27.4",
  "title": "Spreading rumor.",
  "body": " Spreading rumor   A false rumor is being spread within a certain university community. Let be the percentage (from 0 to 100) of the community that has heard the rumor days after the rumor is introduced. Assume that percentage of the population that has heard the rumor grows at a rate proportional to the product of the current percentage of those in the know with the current percentage of those not in the know.   Write down a differential equation for . Use as your constant of proportionality.    Derive a formula for assuming that at time five percent of the population has heard the rumor. Your answer will be expressed in terms of and .    Investigate the long-term behavior of the rumor's spread. Is there a time when the entire population has heard the rumor?          "
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
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
