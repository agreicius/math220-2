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
