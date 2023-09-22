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
  "body": " Antiderivatives  What is calculus? Below you find a decent, if terse answer.   Calculus is the science of functions   In more detail, calculus investigates and analyzes properties of functions using three fundamental tools: the limit , the derivative , and the integral .    Presumably you are already on intimate terms with the limit and the derivative. In this course we take up the integral in earnest. We begin somewhat indirectly, introducing first the antiderivative and its accompanying indefinite integral notation. Both of these concepts have everything to do with the derivative , and nothing directly to do with the actual definition of the integral ! However, as we will see with the fundamental theorem of calculus , these concepts will play an essential role in computing integrals.   Antiderivative   Let be a function defined on an interval . An antiderivative of on is a function satisfying for all .     Basic antiderivative computations   Find an antiderivative for the given function on the given interval .    ,      ,      ,        We find antiderivatives for each example by inspection . To check that our answer is correct, we simply verify that for each candidate antiderivative we have for all in the given interval . We leave this to you.    is an antiderivative of on .     is an antiderivative of on .  To verify that here it is essential to translate the given radical expressions to power expressions so that we can make use of the power rule. That is, we have and , whence for all .     is an antiderivative of on         Antiderivatives depend on intervals   Let . Show that is an antiderivative of on , but not on . Find an antiderivative of on .    We have for all . Since by definition we have , we see that for all . Thus is an antiderivative of on .  By the same token, since and on , we see that for all , and hence that is not an antiderivative of on .  Lastly, from our analysis above we now see that is an antiderivative of on , since on this interval we have .     Computing antiderivatives by inspection   Given a function and interval , to compute (with justification) an antiderivative of  by inspection , proceed as follows.   Provide a candidate antiderivative .    Verify that is an antiderivative by showing that for all .   This is very much a guess and check procedure. Do not be shy in hazarding a guess for your candidate antiderivative ; even if your check proves the candidate to be incorrect, the very act of checking will often reveal what needs to be adjusted to produce an actual antiderivative.     Less elementary antiderivative computations   Find an antiderivative for the given function on the given interval .    ,      ,      ,        Part of what makes these computations more difficult is that the chain rule inevitably arises when checking our candidate antiderivatives. Since the chain rule plays an important role here, make sure you indicate where it arises in your check.    is an antiderative of on since .     is an antiderivative of since .    Hmmm. This is a curious one. Some typical educated guesses as to what might be ( , or ) all prove incorrect when carefully computing using the chain and\/or product rules. Two natural questions arise: (1) does have an antiderivative?; (2) if it does, how do we write it down? All will be revealed in good time!        General antiderivative formula   Assume is an antiderivative of on the interval .   Given any constant , the function is also an antiderivative of on .    Conversely, if is an antiderivative of on , then there is a constant such that for all .         Let be an antiderivative of on the interval and let be any real constant. We have for all . Thus is an antiderivative for any .    Assume and are antiderivatives of on the interval , and define . We have for all . It follows (as a consequence of the mean value theorem) that is a constant function on . In other words, we have for all . Since , we conclude that for all , as desired.       The two statements of taken together are equivalent to the following: if is an antiderivative of on the interval , then the set of all antiderivatives of on is given by . In other words, once we find one antiderivative of on , we obtain all other antiderivatives of simply by adding an arbitrary constant to .  In particular, note that antiderivatives are not unique! There is no such thing as the antiderivative of a function; if has an antiderivative , then it has infinitely many antiderivatives , where is any real constant.    Antiderivative with specified conditions   At time minutes a 100 gallon tank of water begins leaking. After minutes, the rate at which the gallon leaks is . Find a formula for , the amount of water in the tank after minutes.    Recall that if , then the function outputs the instantaneous rate of change of with respect to at the given time. Thus in our current setting is the rate of change of the amount of water in the tank at time . We are told that water leaks out of the tank at a rate given by . It follows that . Put another way, is an antiderivative of . An application of yields as an antiderivative of . It follows from that the general antiderivative is of the form . Since is also an antiderivative, we thus have . To determine what the constant is, we use the initial condition  . Using this implies that . We conclude that and thus .     Initial value problem   Consider the differential equation .   Find the general formula for a function satisfying .    Find the unique function satisfying and the initial conditions  .          First, since is an antiderivative of , using and , we conclude that for some . Next, since is an antiderivative of , reasoning as above we have for some . The general formula for is thus given by .    The given initial conditions  and allows us to solve for the and in as follows. First, using we have , which implies . Using this new fact and , now implies , or . We conclude that .        Indefinite integral    Indefinite integral of    If is an antiderivative of on the interval , then by any other antiderivative is of the form for some . We say in this case that the expression is the general antiderivative and denote this using the indefinite integral notation . The symbol is called the integral symbol , the function is called the integrand of the integral, and is called the variable of integration .     It should be noted that the indefinite integral notation is riddled with ambiguity. In particular, whereas the interval of definition plays an important role in the definition of antiderivative (as we saw in ), it does not appear in the notation . So how are we to understand a statement like ? We will take it to mean that on some interval (either implied or given) the function is an antiderivative of , and hence that the general antiderivative formula for on this interval is given by .   Some of our previous example computations can be summarized by the following indefinite integral formulas. .   Antiderivative formulas   The following antiderivative (or indefinite integral) formulas follow directly from a corresponding derivative formula. The appearing in the formulas below is understood to be any nonzero constant. .     Antiderivative rules   If and are antiderivatives of the functions and , respectively, on the interval , then (1) is an antiderivative of for any , (2) is an antiderivative of , and hence is an antiderivative of for any ,  A somewhat liberal usage of indefinite integral notation allows us to summarize these results as follows.   Scalar rule     Sum rule     Linear combination rule    .    "
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
  "id": "example-4",
  "level": "2",
  "url": "s_antiderivatives.html#example-4",
  "type": "Example",
  "number": "1.1.9",
  "title": "Antiderivative with specified conditions.",
  "body": " Antiderivative with specified conditions   At time minutes a 100 gallon tank of water begins leaking. After minutes, the rate at which the gallon leaks is . Find a formula for , the amount of water in the tank after minutes.    Recall that if , then the function outputs the instantaneous rate of change of with respect to at the given time. Thus in our current setting is the rate of change of the amount of water in the tank at time . We are told that water leaks out of the tank at a rate given by . It follows that . Put another way, is an antiderivative of . An application of yields as an antiderivative of . It follows from that the general antiderivative is of the form . Since is also an antiderivative, we thus have . To determine what the constant is, we use the initial condition  . Using this implies that . We conclude that and thus .   "
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
  "title": "",
  "body": "Some of our previous example computations can be summarized by the following indefinite integral formulas. . "
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
  "body": " Estimating area  By way of motivation of what will be the definition of the integral, we consider the computational problem of computing the area of a region defined by the graph of a function.   Estimating area  Let be the set of points lying between the graph of and the -axis from to : that is, . We will estimate the area of this region by approximating the region itself with a collection of blocks of equal width, whose heights are determined by the -values of points on the graph of through some means. The GeoGebra interactive below helps illustrate the technique.   GeoGebra: Estimating area with rectangular blocks      Estimating area   Let be a nonnegative function defined on the interval , and let be the graph of from to . To estimate the area between and the -axis proceed as follows:   Divide into equal subintervals, each of width .    For each subinterval pick a sample input  in that interval and build the rectangle whose base is the subinterval and whose sample height is given by . The area of this block is .    Sum together the areas of the blocks constructed in Step 2.     Depending on how the sample inputs are chosen in each subinterval, we get a different estimate. Below you find a number of common methods.   If is chosen as the left (resp. right) endpoint of each subinterval, the estimate is called a left sum estimate (resp. right sum estimate ).    If is chosen as the midpoint of each subinterval, the estimate is called a midpoint sum estimate .    If is chosen so that is the minimum value of on each subinterval, the estimate is called a lower sum estimate .    If is chosen so that is the maximum value of on each subinterval, the estimate is called an upper sum estimate .         Let , and let be the graph of . Compute the upper and lower area estimates of the region between and the -axis from to by dividing the interval into 4 equal subintervals. Draw block pictures of your estimates on the provided graphs. Explain why the lower estimate is equal to the right estimate, and why the the upper estimate is equal to the left estimate.      As it turns out, upper and lower estimates for this function end up being the same thing as left and right estimates, respectively. This is the case because happens to be a decreasing function on the interval . Thus we can use the GeoGebra interactive in to produce these diagrams and compute the approximations, using the left and right sum options. (Try for yourself!) The upper estimate (which happens to be the left sum estimate) is ; the under estimate, which happens to be the right estimate, is . Observe that the upper estimate is indeed larger than the under estimate, as we expect.      Let , and let be the graph of . Compute the upper and lower area estimates of the region between and the -axis from to by dividing the interval into 4 equal subintervals. Draw block pictures of your estimates on the provided graphs. \\     First we determine the width of the blocks: since the interval has length , dividing this into four equal lengths yields blocks of width . To pick the heights for each block, we look for the highest (resp., lowest) point in the curve over each base. Here is a diagram of the upper and lower estimates. The corresponding area estimates are computed as follows:      Estimating net change   Suppose physical quantity is a function of an input , and that is the instantaneous rate of change of with respect to .  Suppose we are only given the rate of change function and wish to use this to estimate the net change of from to : that is, we wish to estimate . We can do so using the same method described in .  In this context we interpret a sample value as a constant rate of change over the given subinterval, in which case an individual term in our sum is understood as an estimate of the net change of over the given subinterval, under the simplifying assumption that changes with constant rate of change  over the interval.     Recall that given a function , its instantaneous rate of change with respect to is precisely its derivative . This allows us to interpret as a method of estimating the net change in a function over an interval using information only about its derivative function .    Below you find the graph of the velocity (in mph) of a driver heading due east minutes after setting off. Compute an estimate of the area under the graph of between and , and explain what this estimate means physically speaking. Include units!    First we compute an area of the region under the graph using a right sum estimate with four blocks. Here is a diagram corresponding to this estimate procedure. Let be the -th block for each , and let . We compute the areas , and include the units of (mph) and (min) in our computations: Physically speaking, the first area , computes the distance the driver travels eastward, had they driven at a constant speed of mph eastward for the full five minutes. As such, this is an approximation of the total distance the drive traveled during this segment of the drive. Similar interpretations apply to the other blocks: each area can be understood as an approximation of the distance traveled eastward during that segment of the drive. We conclude that the the driver travels approximately in the eastward direction.  Observe that in this example, where velocity is always positive (equivalently, the driver always travels in same direction), distance traveled over any time interval is the same thing as change in position (or displacement ) over that interval. And so total distance traveled is the same thing as total change of position. This is no longer the case if the velocity function can be positive and negative. We will pick this up again later.    "
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
  "id": "example-7",
  "level": "2",
  "url": "s_est_area.html#example-7",
  "type": "Example",
  "number": "1.2.3",
  "title": "",
  "body": "  Let , and let be the graph of . Compute the upper and lower area estimates of the region between and the -axis from to by dividing the interval into 4 equal subintervals. Draw block pictures of your estimates on the provided graphs. Explain why the lower estimate is equal to the right estimate, and why the the upper estimate is equal to the left estimate.      As it turns out, upper and lower estimates for this function end up being the same thing as left and right estimates, respectively. This is the case because happens to be a decreasing function on the interval . Thus we can use the GeoGebra interactive in to produce these diagrams and compute the approximations, using the left and right sum options. (Try for yourself!) The upper estimate (which happens to be the left sum estimate) is ; the under estimate, which happens to be the right estimate, is . Observe that the upper estimate is indeed larger than the under estimate, as we expect.   "
},
{
  "id": "example-8",
  "level": "2",
  "url": "s_est_area.html#example-8",
  "type": "Example",
  "number": "1.2.4",
  "title": "",
  "body": "  Let , and let be the graph of . Compute the upper and lower area estimates of the region between and the -axis from to by dividing the interval into 4 equal subintervals. Draw block pictures of your estimates on the provided graphs. \\     First we determine the width of the blocks: since the interval has length , dividing this into four equal lengths yields blocks of width . To pick the heights for each block, we look for the highest (resp., lowest) point in the curve over each base. Here is a diagram of the upper and lower estimates. The corresponding area estimates are computed as follows:    "
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
  "id": "example-9",
  "level": "2",
  "url": "s_est_area.html#example-9",
  "type": "Example",
  "number": "1.2.7",
  "title": "",
  "body": " Below you find the graph of the velocity (in mph) of a driver heading due east minutes after setting off. Compute an estimate of the area under the graph of between and , and explain what this estimate means physically speaking. Include units!    First we compute an area of the region under the graph using a right sum estimate with four blocks. Here is a diagram corresponding to this estimate procedure. Let be the -th block for each , and let . We compute the areas , and include the units of (mph) and (min) in our computations: Physically speaking, the first area , computes the distance the driver travels eastward, had they driven at a constant speed of mph eastward for the full five minutes. As such, this is an approximation of the total distance the drive traveled during this segment of the drive. Similar interpretations apply to the other blocks: each area can be understood as an approximation of the distance traveled eastward during that segment of the drive. We conclude that the the driver travels approximately in the eastward direction.  Observe that in this example, where velocity is always positive (equivalently, the driver always travels in same direction), distance traveled over any time interval is the same thing as change in position (or displacement ) over that interval. And so total distance traveled is the same thing as total change of position. This is no longer the case if the velocity function can be positive and negative. We will pick this up again later.   "
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
  "id": "appendix-thms",
  "level": "1",
  "url": "appendix-thms.html",
  "type": "Appendix",
  "number": "C",
  "title": "Theory",
  "body": " Theory   "
},
{
  "id": "appendix-egs",
  "level": "1",
  "url": "appendix-egs.html",
  "type": "Appendix",
  "number": "D",
  "title": "Examples",
  "body": " Examples   "
},
{
  "id": "appendix-interactives",
  "level": "1",
  "url": "appendix-interactives.html",
  "type": "Appendix",
  "number": "E",
  "title": "Interactives and computational cells",
  "body": " Interactives and computational cells   "
},
{
  "id": "appendix-dicta",
  "level": "1",
  "url": "appendix-dicta.html",
  "type": "Appendix",
  "number": "F",
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
