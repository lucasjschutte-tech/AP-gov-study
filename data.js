/* ============================================================
   AP GOV STUDY — DATA FILE
   All content data: SCOTUS cases, FRQ bank, Unit guides
   ============================================================ */

// ─── SUPREME COURT CASES ────────────────────────────────────
const SCOTUS_CASES = [
  {
    id: 1,
    name: "Marbury v. Madison",
    year: 1803,
    citation: "5 U.S. 137",
    unit: 2,
    topic: "Judicial Review / Checks & Balances",
    tags: ["judicial review", "Article III", "Unit 2"],
    background: "William Marbury was appointed a justice of the peace by outgoing President Adams but his commission was never delivered. The new Secretary of State, James Madison, refused to deliver the commission. Marbury petitioned the Supreme Court directly under the Judiciary Act of 1789.",
    question: "Did the Supreme Court have the authority to order Madison to deliver the commission? Did the Judiciary Act of 1789 unconstitutionally expand the Court's original jurisdiction?",
    holding: "The Supreme Court cannot compel Madison to deliver the commission. Chief Justice Marshall ruled that Section 13 of the Judiciary Act of 1789 was unconstitutional because it expanded the Court's original jurisdiction beyond what Article III of the Constitution permits.",
    significance: [
      "Established the principle of judicial review — the Court's power to strike down laws that violate the Constitution.",
      "Greatly expanded the power of the judicial branch relative to Congress and the executive.",
      "Remains the foundational precedent for the federal judiciary's role in the U.S. constitutional system."
    ],
    examTip: "Know that Marshall cleverly avoided a direct confrontation with Jefferson by ruling in Jefferson's favor on the delivery issue while simultaneously claiming the Court's most important power. The quote 'It is emphatically the province and duty of the Judicial Department to say what the law is' is essential.",
    verdict: "government-power",
    decision: "4-0"
  },
  {
    id: 2,
    name: "McCulloch v. Maryland",
    year: 1819,
    citation: "17 U.S. 316",
    unit: 1,
    topic: "Federalism / Necessary & Proper Clause",
    tags: ["federalism", "necessary & proper", "supremacy clause", "Unit 1"],
    background: "Congress chartered the Second Bank of the United States. Maryland passed a law taxing any bank not chartered by Maryland, specifically targeting the federal bank. McCulloch, the bank's cashier, refused to pay the tax.",
    question: "Did Congress have the authority to establish the bank? Did Maryland have the power to tax a federal institution?",
    holding: "Congress has implied powers under the Necessary and Proper Clause to create a national bank. Maryland cannot tax the federal bank because the Constitution and federal laws are supreme over state laws (Supremacy Clause).",
    significance: [
      "Established a broad interpretation of Congress's implied powers under the Necessary and Proper Clause.",
      "Affirmed federal supremacy over the states via the Supremacy Clause.",
      "Set the foundation for an expansive federal government through loose construction of the Constitution.",
      "Marshall's phrase: 'the power to tax involves the power to destroy' remains famous."
    ],
    examTip: "Remember both holdings: (1) Congress CAN create the bank (implied powers), and (2) Maryland CANNOT tax it (supremacy clause). This case is critical for federalism questions.",
    verdict: "government-power",
    decision: "7-0"
  },
  {
    id: 3,
    name: "United States v. Lopez",
    year: 1995,
    citation: "514 U.S. 549",
    unit: 1,
    topic: "Federalism / Commerce Clause Limits",
    tags: ["federalism", "commerce clause", "limits on congress", "Unit 1"],
    background: "Alfonso Lopez, a 12th grader, brought a gun to school in Texas. He was charged under the federal Gun-Free School Zones Act of 1990, which prohibited firearms near schools. Lopez challenged that Congress had exceeded its Commerce Clause authority.",
    question: "Did Congress exceed its authority under the Commerce Clause when it enacted the Gun-Free School Zones Act?",
    holding: "Yes. The Supreme Court struck down the act 5-4. Possessing a gun in a school zone is not an economic activity that substantially affects interstate commerce. This was the first time since 1937 that the Court limited congressional power under the Commerce Clause.",
    significance: [
      "First case in decades to strike down a federal law as exceeding the Commerce Clause.",
      "Signaled a revival of limits on federal power in favor of states (New Federalism).",
      "Established three categories of activity Congress can regulate under the Commerce Clause: channels of interstate commerce, instrumentalities, and activities substantially affecting commerce."
    ],
    examTip: "Contrast with McCulloch — Lopez limits federal power while McCulloch expands it. Know that this decision was a shift toward states' rights after decades of broad Commerce Clause interpretation.",
    verdict: "individual-rights",
    decision: "5-4"
  },
  {
    id: 4,
    name: "Engel v. Vitale",
    year: 1962,
    citation: "370 U.S. 421",
    unit: 3,
    topic: "Establishment Clause / Separation of Church & State",
    tags: ["First Amendment", "establishment clause", "religion", "Unit 3"],
    background: "New York State Board of Regents composed a non-denominational prayer and recommended schools begin the day with it. Parents of students in Hyde Park, NY sued, arguing the prayer violated the Establishment Clause.",
    question: "Does the recitation of a state-sponsored prayer in public schools violate the Establishment Clause of the First Amendment?",
    holding: "Yes. School-sponsored prayer in public schools violates the Establishment Clause. It makes no difference that the prayer was voluntary or non-denominational — government cannot compose official prayers for public schools.",
    significance: [
      "Prohibited government-sponsored prayer in public schools.",
      "Broadly applied the Establishment Clause to state governments via the Fourteenth Amendment (incorporation).",
      "Remains one of the most controversial First Amendment decisions."
    ],
    examTip: "Students often confuse this — students CAN pray privately; the government just CANNOT sponsor or lead prayer. Also connects to the Lemon Test established later in Lemon v. Kurtzman (1971).",
    verdict: "individual-rights",
    decision: "6-1"
  },
  {
    id: 5,
    name: "Wisconsin v. Yoder",
    year: 1972,
    citation: "406 U.S. 205",
    unit: 3,
    topic: "Free Exercise Clause",
    tags: ["First Amendment", "free exercise", "religion", "Unit 3"],
    background: "Amish parents in Wisconsin refused to send their children to public school past 8th grade, citing religious beliefs that high school attendance was contrary to their faith and way of life. Wisconsin's compulsory attendance law required schooling until age 16.",
    question: "Did Wisconsin's compulsory school attendance law violate the Free Exercise Clause of the First Amendment?",
    holding: "Yes. The Amish community's free exercise rights outweighed Wisconsin's interest in compulsory education beyond 8th grade. The Court applied a balancing test, finding the state's interests insufficient to override sincere religious practice.",
    significance: [
      "Established that the government must show a compelling interest to override sincere religious practices.",
      "Broadly interpreted Free Exercise protections.",
      "Often contrasted with Employment Division v. Smith (1990) which narrowed free exercise protections."
    ],
    examTip: "Compare and contrast with Engel — Engel involves the Establishment Clause (government promoting religion), Yoder involves the Free Exercise Clause (government restricting religion). Both deal with First Amendment religion clauses.",
    verdict: "individual-rights",
    decision: "6-1"
  },
  {
    id: 6,
    name: "Tinker v. Des Moines",
    year: 1969,
    citation: "393 U.S. 503",
    unit: 3,
    topic: "Free Speech / Student Rights",
    tags: ["First Amendment", "free speech", "students", "Unit 3"],
    background: "Students in Des Moines, Iowa wore black armbands to school to protest the Vietnam War. The school had a policy banning armbands, and the students were suspended. They sued, claiming violation of free speech.",
    question: "Did the school's ban on armband wearing violate students' First Amendment right to free speech?",
    holding: "Yes. Students do not 'shed their constitutional rights at the schoolhouse gate.' The school failed to show that the armbands would cause substantial disruption. Symbolic speech (wearing armbands) is protected by the First Amendment.",
    significance: [
      "Established that students retain First Amendment rights in public schools.",
      "Defined 'substantial disruption' as the standard schools must meet to restrict student speech.",
      "Recognized symbolic speech as protected under the First Amendment."
    ],
    examTip: "The phrase 'students do not shed their constitutional rights at the schoolhouse gate' is directly quotable on FRQs. Know the 'substantial disruption' test.",
    verdict: "individual-rights",
    decision: "7-2"
  },
  {
    id: 7,
    name: "New York Times Co. v. United States",
    year: 1971,
    citation: "403 U.S. 713",
    unit: 3,
    topic: "Free Press / Prior Restraint",
    tags: ["First Amendment", "free press", "prior restraint", "Unit 3"],
    background: "The Nixon administration sought to prevent the New York Times and Washington Post from publishing the Pentagon Papers — classified documents about U.S. involvement in Vietnam. The government argued publication would harm national security.",
    question: "Could the government prevent newspapers from publishing the Pentagon Papers?",
    holding: "No. The government bears a heavy burden to justify prior restraint (censorship before publication). The government failed to meet that burden. The press is free to publish the Pentagon Papers.",
    significance: [
      "Strongly limited the government's ability to impose prior restraint on the press.",
      "Affirmed the First Amendment's protection of a free press even regarding sensitive national security matters.",
      "Established a very high bar for prior restraint — courts presume it to be unconstitutional."
    ],
    examTip: "Prior restraint = government censoring before publication. The Court nearly always sides against prior restraint. Contrast with situations AFTER publication, where libel/defamation laws may apply.",
    verdict: "individual-rights",
    decision: "6-3"
  },
  {
    id: 8,
    name: "Schenck v. United States",
    year: 1919,
    citation: "249 U.S. 47",
    unit: 3,
    topic: "Free Speech / Clear & Present Danger",
    tags: ["First Amendment", "free speech", "limits on speech", "Unit 3"],
    background: "Charles Schenck distributed pamphlets urging men to resist the draft during WWI. He was convicted under the Espionage Act of 1917. Schenck argued the act violated his First Amendment rights.",
    question: "Did the Espionage Act violate Schenck's First Amendment right to free speech?",
    holding: "No. The First Amendment does not protect speech that creates a 'clear and present danger' of harm. During wartime, urging men to resist the draft presented such a danger. The famous analogy: you cannot falsely shout 'fire' in a crowded theater.",
    significance: [
      "Established the 'clear and present danger' test for limiting free speech.",
      "First major Supreme Court case to address free speech limitations.",
      "Later narrowed — the 'clear and present danger' test has been largely replaced by the 'imminent lawless action' test from Brandenburg v. Ohio (1969)."
    ],
    examTip: "Know that Holmes' 'clear and present danger' test from Schenck was later replaced by the stronger speech-protective 'imminent lawless action' test. Schenck shows that speech rights are NOT absolute.",
    verdict: "government-power",
    decision: "9-0"
  },
  {
    id: 9,
    name: "Gideon v. Wainwright",
    year: 1963,
    citation: "372 U.S. 335",
    unit: 3,
    topic: "Right to Counsel / 6th Amendment Incorporation",
    tags: ["6th Amendment", "right to counsel", "incorporation", "Unit 3"],
    background: "Clarence Gideon was charged with felony breaking and entering in Florida. He could not afford a lawyer and asked the court to appoint one. Florida law only provided appointed counsel in capital cases. He defended himself and was convicted.",
    question: "Does the Sixth Amendment's guarantee of counsel apply to state courts through the Fourteenth Amendment?",
    holding: "Yes. The right to an attorney is a fundamental right under the Sixth Amendment. Through the incorporation doctrine (Fourteenth Amendment), this right applies to state courts, not just federal courts. States must provide attorneys to defendants who cannot afford one.",
    significance: [
      "Incorporated the Sixth Amendment right to counsel to the states via the Fourteenth Amendment.",
      "Led to the creation of public defender offices across the country.",
      "Fundamental to a fair trial — reinforces the adversarial justice system."
    ],
    examTip: "Gideon is the textbook example of selective incorporation. Know that the 14th Amendment's Due Process Clause is the mechanism through which rights in the Bill of Rights are applied to the states.",
    verdict: "individual-rights",
    decision: "9-0"
  },
  {
    id: 10,
    name: "Roe v. Wade",
    year: 1973,
    citation: "410 U.S. 113",
    unit: 3,
    topic: "Right to Privacy / Substantive Due Process",
    tags: ["privacy", "9th Amendment", "14th Amendment", "Unit 3"],
    background: "A Texas law banned almost all abortions. 'Jane Roe' (Norma McCorvey) challenged the law, arguing it violated her constitutional right to privacy.",
    question: "Does the Constitution protect a woman's decision to have an abortion?",
    holding: "Yes. A woman's right to an abortion falls within the right to privacy protected by the 14th Amendment's Due Process Clause. The Court established a trimester framework: government cannot restrict abortion in the first trimester, may regulate in the second, and may ban in the third.",
    significance: [
      "Recognized a constitutional right to abortion based on substantive due process / right to privacy.",
      "One of the most politically significant Supreme Court decisions of the 20th century.",
      "Overturned in 2022 by Dobbs v. Jackson Women's Health Organization, which held the Constitution does not confer a right to abortion.",
      "Connected to Griswold v. Connecticut (1965) which first recognized a right to privacy."
    ],
    examTip: "Note that Roe was overturned by Dobbs (2022). For AP Gov, understand both decisions and the concept of substantive due process / right to privacy. Know that the right to privacy is not explicitly mentioned in the Constitution.",
    verdict: "individual-rights",
    decision: "7-2"
  },
  {
    id: 11,
    name: "McDonald v. Chicago",
    year: 2010,
    citation: "561 U.S. 742",
    unit: 3,
    topic: "Second Amendment Incorporation",
    tags: ["2nd Amendment", "incorporation", "gun rights", "Unit 3"],
    background: "Otis McDonald challenged Chicago's handgun ban. Two years earlier, in District of Columbia v. Heller (2008), the Court had ruled that the Second Amendment protects an individual right to bear arms, but only against federal laws. McDonald sought to apply this right to states.",
    question: "Does the Second Amendment right to bear arms apply to state and local governments through the Fourteenth Amendment?",
    holding: "Yes. The Second Amendment is incorporated against the states via the Fourteenth Amendment's Due Process Clause. Chicago's handgun ban was struck down.",
    significance: [
      "Extended Second Amendment protections to state and local gun laws.",
      "Paired with Heller (2008), established that individuals have a right to bear arms for self-defense.",
      "Demonstrates the ongoing process of selective incorporation."
    ],
    examTip: "McDonald = Second Amendment applied to states. Heller = Second Amendment protects individual right. Know both cases and how they work together. Also a good incorporation example alongside Gideon.",
    verdict: "individual-rights",
    decision: "5-4"
  },
  {
    id: 12,
    name: "Brown v. Board of Education",
    year: 1954,
    citation: "347 U.S. 483",
    unit: 3,
    topic: "Equal Protection / Desegregation",
    tags: ["14th Amendment", "equal protection", "civil rights", "Unit 3"],
    background: "Linda Brown, a Black student in Topeka, Kansas, was denied admission to her local all-white school. Her father sued. The case was combined with similar cases from Delaware, South Carolina, Virginia, and Washington, D.C.",
    question: "Does racial segregation in public schools violate the Equal Protection Clause of the Fourteenth Amendment?",
    holding: "Yes, unanimously. Separate educational facilities are inherently unequal. The 'separate but equal' doctrine established in Plessy v. Ferguson (1896) was overturned in the context of public education.",
    significance: [
      "Overturned Plessy v. Ferguson's 'separate but equal' doctrine in public schools.",
      "Catalyzed the Civil Rights Movement.",
      "Established that government-mandated racial segregation violates the Equal Protection Clause.",
      "Warren Court's unanimous decision gave it enormous moral and legal authority."
    ],
    examTip: "Know that Brown overturned Plessy v. Ferguson. Plessy allowed 'separate but equal' — Brown said separate is inherently unequal. The psychological harm to Black students from segregation was central to the ruling (citing social science research).",
    verdict: "individual-rights",
    decision: "9-0"
  },
  {
    id: 13,
    name: "Citizens United v. FEC",
    year: 2010,
    citation: "558 U.S. 310",
    unit: 5,
    topic: "Campaign Finance / First Amendment",
    tags: ["First Amendment", "campaign finance", "corporations", "Unit 5"],
    background: "Citizens United, a nonprofit, wanted to air a film critical of Hillary Clinton during the 2008 primary campaign. Federal election law (BCRA) prohibited corporations from using general treasury funds for 'electioneering communications' near an election. Citizens United challenged the law.",
    question: "Did the BCRA's prohibition on corporate independent expenditures violate the First Amendment's free speech protections?",
    holding: "Yes. Political spending is a form of protected speech under the First Amendment. The government cannot restrict independent political expenditures by corporations, associations, or labor unions. Reversed parts of McConnell v. FEC and Austin v. Michigan Chamber of Commerce.",
    significance: [
      "Allowed corporations and unions to spend unlimited amounts on independent campaign expenditures.",
      "Led directly to the rise of Super PACs.",
      "Highly controversial — critics argue it gives corporations too much political influence.",
      "Affirmed the principle that corporations have First Amendment rights."
    ],
    examTip: "Citizens United → unlimited independent expenditures by corporations = protected speech. Know that this led to Super PACs. Contrast with Buckley v. Valeo (1976) and understand the role of money in politics questions.",
    verdict: "individual-rights",
    decision: "5-4"
  },
  {
    id: 14,
    name: "Baker v. Carr",
    year: 1962,
    citation: "369 U.S. 186",
    unit: 5,
    topic: "Voting Rights / Equal Protection / Reapportionment",
    tags: ["voting rights", "reapportionment", "equal protection", "Unit 5"],
    background: "Charles Baker challenged Tennessee's failure to update its legislative districts since 1901, despite massive population shifts. He argued rural districts had far more representation per person than urban districts, violating the Equal Protection Clause.",
    question: "Can federal courts hear challenges to state legislative apportionment? Is reapportionment a justiciable (court-appropriate) question?",
    holding: "Yes. Legislative apportionment is a justiciable question that federal courts can hear. The Court rejected the 'political question doctrine' argument that reapportionment was for legislatures to decide, not courts.",
    significance: [
      "Opened federal courts to redistricting challenges.",
      "Led directly to the 'one person, one vote' principle established in Reynolds v. Sims (1964).",
      "Enabled federal judicial oversight of state legislative districts.",
      "Connected to majority-minority districts and modern gerrymandering debates."
    ],
    examTip: "Baker v. Carr = federal courts CAN hear reapportionment cases. Reynolds v. Sims (1964) then established 'one person, one vote.' Know how these two cases work together and their impact on representation.",
    verdict: "individual-rights",
    decision: "6-2"
  },
  {
    id: 15,
    name: "Shaw v. Reno",
    year: 1993,
    citation: "509 U.S. 630",
    unit: 5,
    topic: "Redistricting / Racial Gerrymandering",
    tags: ["voting rights", "gerrymandering", "equal protection", "Unit 5"],
    background: "North Carolina redrew congressional districts to create a second majority-Black district after DOJ objection under the Voting Rights Act. The district was oddly shaped, running along a highway for 160 miles. White voters challenged it as racial gerrymandering.",
    question: "Did North Carolina's majority-Black congressional district violate the Equal Protection Clause?",
    holding: "Yes. A redistricting plan that is so bizarre on its face that it is unexplainable on grounds other than race is subject to strict scrutiny under the Equal Protection Clause. White voters can bring challenges to racial gerrymandering.",
    significance: [
      "Limited the use of race as the predominant factor in drawing congressional districts.",
      "Applied strict scrutiny to racial gerrymandering.",
      "Created tension with the Voting Rights Act's goal of increasing minority representation.",
      "Foundation for ongoing cases challenging racial vs. partisan gerrymandering."
    ],
    examTip: "Shaw v. Reno = strict scrutiny for racial gerrymandering. Contrast with Baker v. Carr (opens courts to redistricting) and understand the VRA tension. Modern gerrymandering debates often reference this case.",
    verdict: "individual-rights",
    decision: "5-4"
  }
];

// ─── FRQ QUESTION BANK ──────────────────────────────────────
const FRQ_QUESTIONS = [
  {
    id: 1,
    type: "concept-application",
    title: "Federalism and Federal vs. State Power",
    totalPoints: 3,
    scenario: `The federal government has proposed a new education initiative that would require all public schools to implement a standardized national curriculum. Several governors have objected, arguing that education has historically been a state function. The federal government is conditioning federal education funding on states adopting the curriculum. A coalition of states is considering legal challenges.`,
    parts: [
      {
        label: "Part A",
        points: 1,
        prompt: "Describe the constitutional basis the federal government could use to justify requiring states to adopt the national curriculum as a condition for receiving federal funding.",
        keywords: ["spending power", "conditions on grants", "article I", "necessary and proper", "commerce clause", "conditional spending", "South Dakota v. Dole"],
        modelAnswer: "The federal government could justify this requirement using its spending power under Article I, Section 8. In South Dakota v. Dole (1987), the Supreme Court upheld the federal government's ability to attach conditions to federal grants to states, provided the conditions are related to the federal interest in the program, clearly stated, and not coercive. By conditioning education funding on curriculum adoption, the federal government is exercising its authority to encourage states to implement federal policies without directly mandating them."
      },
      {
        label: "Part B",
        points: 1,
        prompt: "Explain how the Tenth Amendment could be used to challenge the federal government's education initiative.",
        keywords: ["10th amendment", "reserved powers", "states", "education", "enumerated", "police powers", "anti-commandeering"],
        modelAnswer: "The Tenth Amendment reserves all powers not delegated to the federal government to the states or the people. Since education is not explicitly mentioned in the Constitution's enumerated powers, states can argue it falls under their reserved powers. States could argue the federal initiative violates the anti-commandeering doctrine — the federal government cannot compel states to enact or administer a federal regulatory program. If the conditions are so coercive that states have no real choice but to comply, courts might view it as commandeering rather than voluntary conditional spending."
      },
      {
        label: "Part C",
        points: 1,
        prompt: "In the context of this scenario, explain one way in which the concept of 'cooperative federalism' differs from 'dual federalism.'",
        keywords: ["cooperative federalism", "dual federalism", "marble cake", "layer cake", "shared responsibility", "intergovernmental", "separation"],
        modelAnswer: "Dual federalism (layer cake) maintains strict separation between federal and state powers, each operating within its own sphere. Under this model, the federal government would have no role in education since it is a state matter. Cooperative federalism (marble cake) involves federal and state governments working together on shared goals, often through grants-in-aid. The national curriculum initiative reflects cooperative federalism — the federal government sets standards and provides funding, while states administer the program, blending both levels of government in the same policy area."
      }
    ]
  },
  {
    id: 2,
    type: "scotus-comparison",
    title: "Free Speech and Student Rights",
    totalPoints: 4,
    scenario: `In 2019, a student at a public high school in Ohio was suspended for posting on social media outside of school hours. The post contained a profane rant about not making the varsity cheerleading squad. The school argued the post was disruptive to school morale and team cohesion. The student sued, claiming violation of her First Amendment rights. (Based on Mahanoy Area School District v. B.L., 2021)`,
    parts: [
      {
        label: "Part A",
        points: 1,
        prompt: "Identify the constitutional clause that is at issue in this scenario.",
        keywords: ["first amendment", "free speech", "speech clause", "freedom of speech"],
        modelAnswer: "The Free Speech Clause of the First Amendment is at issue. The student claims the school violated her freedom of speech by punishing her for an out-of-school social media post."
      },
      {
        label: "Part B",
        points: 1,
        prompt: "Describe the holding in Tinker v. Des Moines (1969) and explain how the precedent established in that case applies to this scenario.",
        keywords: ["substantial disruption", "schoolhouse gate", "tinker", "armband", "vietnam", "symbolic speech", "did not shed"],
        modelAnswer: "In Tinker v. Des Moines, the Supreme Court held that students do not 'shed their constitutional rights at the schoolhouse gate.' Schools may only restrict student speech if the speech causes substantial disruption to school operations or the rights of others. In this scenario, applying Tinker, the court would need to determine whether the student's off-campus social media post caused a substantial disruption to the school. Since the speech occurred off-campus and outside school hours, the school's authority to regulate it is limited, and the burden of proving substantial disruption is high."
      },
      {
        label: "Part C",
        points: 1,
        prompt: "Explain one reason why the Supreme Court might rule differently in this case than in Tinker.",
        keywords: ["off campus", "outside school", "social media", "internet", "technology", "beyond school grounds", "school hours"],
        modelAnswer: "A key distinction is that the speech in this case occurred off-campus and outside of school hours via social media, whereas in Tinker, the armbands were worn at school. The Court might rule that school authority over student speech is more limited — or nearly non-existent — when the speech occurs entirely off school grounds and outside school time. Extending school authority to off-campus speech could have vast chilling effects on student expression in all aspects of their lives."
      },
      {
        label: "Part D",
        points: 1,
        prompt: "Explain how this case could be used to argue EITHER for or against expanding First Amendment protections for students.",
        keywords: ["expanding", "limiting", "first amendment", "student speech", "chilling effect", "school authority", "protection"],
        modelAnswer: "FOR expanding protections: This case demonstrates why courts should protect off-campus student speech. If schools can punish students for anything said outside of school, students would have no protected sphere of expression. Social media is the modern 'town square,' and allowing schools unlimited authority over students' digital lives would fundamentally undermine First Amendment freedoms. AGAINST expanding protections: Schools have a legitimate interest in maintaining campus order, and off-campus posts about school activities like sports teams can spread rapidly through a school community, causing real disruption. If the post undermined team cohesion, the school's interest in regulating it may outweigh the student's expressive interest."
      }
    ]
  },
  {
    id: 3,
    type: "quantitative-analysis",
    title: "Voter Turnout and Political Participation",
    totalPoints: 4,
    scenario: `<strong>Presidential Election Voter Turnout by Age Group (2020)</strong><br><br>
    Age 18–29: 51% turnout &nbsp;|&nbsp; Age 30–44: 58% turnout<br>
    Age 45–59: 68% turnout &nbsp;|&nbsp; Age 60+: 72% turnout<br><br>
    <strong>Registered Voters Who Did Not Vote (2020), by Reason:</strong><br>
    - Too busy / conflicting schedule: 23%<br>
    - Illness or disability: 12%<br>
    - Not interested / didn't like candidates: 15%<br>
    - Registration problems: 10%<br>
    - Forgot to vote: 7%<br>
    - Other: 33%`,
    parts: [
      {
        label: "Part A",
        points: 1,
        prompt: "Identify one trend shown in the voter turnout data and explain one reason that accounts for that trend.",
        keywords: ["older", "higher", "younger", "lower", "age", "turnout increases", "life experience", "civic engagement", "political efficacy", "stake"],
        modelAnswer: "One trend is that voter turnout increases with age. Older Americans (60+) vote at significantly higher rates (72%) than young voters (18–29, 51%). This can be explained by the fact that older Americans have more established stakes in political outcomes — including Medicare, Social Security, and retirement policy. They also have longer experience with the political system, higher levels of political efficacy, and stronger habitual patterns of voting established over many election cycles."
      },
      {
        label: "Part B",
        points: 1,
        prompt: "Using the data on non-voters, describe one institutional or structural barrier to voting that the data supports.",
        keywords: ["registration", "problems", "too busy", "schedule", "structural", "barrier", "institutional", "ID", "registration"],
        modelAnswer: "The data supports registration problems as a structural barrier — 10% of registered non-voters cited registration issues as the reason they did not vote. However, this only reflects registered non-voters, meaning unregistered citizens are not captured. The United States' system of requiring voter registration is a structural barrier not present in many other democracies. Additionally, the 23% citing 'too busy' suggests that voting logistics (Election Day on a Tuesday, limited polling hours) create structural barriers, particularly for working-class voters."
      },
      {
        label: "Part C",
        points: 1,
        prompt: "Describe one policy reform that could address the low voter turnout among 18–29 year olds specifically.",
        keywords: ["automatic registration", "same day registration", "vote by mail", "early voting", "lower voting age", "campus polling", "education", "civics"],
        modelAnswer: "Automatic voter registration (AVR) could address low youth turnout. Under AVR, eligible citizens are automatically registered when they interact with government agencies (e.g., getting a driver's license), removing the burden of proactive registration that particularly affects young people who are newly eligible to vote and may be unaware of registration requirements or deadlines. States with AVR and same-day registration consistently show higher youth turnout."
      },
      {
        label: "Part D",
        points: 1,
        prompt: "Explain how low youth voter turnout affects political outcomes and the responsiveness of elected officials.",
        keywords: ["representation", "policy", "responsive", "older voters", "pandering", "social security", "incentive", "collective action", "rational"],
        modelAnswer: "Low youth voter turnout creates a representation gap — elected officials have greater incentives to respond to the policy preferences of older voters who vote at higher rates. This creates a self-reinforcing cycle: politicians focus on issues like Medicare and Social Security that matter to reliable older voters, while deprioritizing issues important to young people (student loans, climate change, housing). Rational politicians maximize votes, so they allocate attention proportionally to voting constituencies. As long as youth turnout remains low, young people's political interests are underrepresented in policy outcomes."
      }
    ]
  },
  {
    id: 4,
    type: "argument-essay",
    title: "Should the Electoral College Be Abolished?",
    totalPoints: 6,
    scenario: `The Electoral College has been a feature of presidential elections since the Constitution was ratified. Critics argue it distorts democracy and should be replaced with a national popular vote. Supporters argue it preserves the federal structure and protects minority interests.<br><br>
    <strong>Enduring understandings to consider:</strong> Constitutional compromises, federalism, majority vs. minority rule, representation, political equality.`,
    parts: [
      {
        label: "Essay",
        points: 6,
        prompt: `Write a well-organized essay that: (1) takes a clear position on whether the Electoral College should be abolished, (2) uses at least TWO pieces of evidence to support your position, and (3) addresses at least ONE counterargument with a rebuttal. Your essay will be scored on the quality of your argument, use of evidence, and organization. You may reference constitutional provisions, Supreme Court cases, or specific elections as evidence.`,
        keywords: [
          "electoral college", "popular vote", "federalism", "article II",
          "swing states", "battleground", "winner take all", "faithless electors",
          "2000 election", "2016 election", "national popular vote interstate compact",
          "small states", "large states", "hamilton", "federalist",
          "counterargument", "however", "although", "while", "rebuttal"
        ],
        modelAnswer: `A strong essay would include:

**Thesis (1 pt):** A defensible, specific claim that responds to the prompt (e.g., "The Electoral College should be abolished because it violates the principle of political equality and distorts presidential campaigns toward a handful of swing states").

**Evidence 1 (1 pt):** Examples such as: the 2000 and 2016 elections where candidates won the Electoral College but lost the popular vote; candidates ignoring non-competitive states (e.g., California, Texas) during campaigns; winner-take-all rules meaning millions of votes effectively "don't count" toward the outcome.

**Evidence 2 (1 pt):** Historical/constitutional context: the Electoral College was created partly due to distrust of direct democracy and as a compromise for slave states (3/5 Compromise inflated Southern electoral votes). The National Popular Vote Interstate Compact as a reform effort. Or: small states are overrepresented per capita because every state gets at least 3 electoral votes.

**Counterargument + Rebuttal (1 pt):** Acknowledge a supporting argument (e.g., the Electoral College protects federalism, requires candidates to build broad geographic coalitions, prevents large urban areas from dominating) and then rebut it (e.g., geographic diversity of voters does not mean the same thing as geographic diversity of states; a national popular vote would still require large turnout across the country).

**Organization (1 pt):** Clear introduction, body paragraphs, conclusion.

**Sophistication (1 pt):** Nuanced analysis, recognition of complexity, or examination of second-order effects.`
      }
    ]
  },
  {
    id: 5,
    type: "concept-application",
    title: "Congressional Oversight and the Bureaucracy",
    totalPoints: 3,
    scenario: `The Environmental Protection Agency (EPA), a federal executive agency, issued a new regulation limiting carbon emissions from power plants. The rule was created through the notice-and-comment rulemaking process. Several members of Congress argue the EPA has exceeded its statutory authority and that Congress never granted the agency such broad powers. They are considering various responses to check the agency's action.`,
    parts: [
      {
        label: "Part A",
        points: 1,
        prompt: "Describe one formal constitutional power Congress could use to limit or reverse the EPA's carbon emissions regulation.",
        keywords: ["legislation", "override", "repeal", "power of the purse", "appropriations", "budget cuts", "hearings", "oversight", "subpoena", "confirmation"],
        modelAnswer: "Congress can use its power of the purse (Article I, Section 9) to limit the EPA's ability to enforce the regulation by cutting the agency's budget or prohibiting funds from being used to implement the rule. Alternatively, Congress could pass new legislation directly overturning the regulation, clarifying that the EPA does not have authority to regulate carbon emissions in this manner. Congress could also hold oversight hearings, subpoena EPA officials, and conduct investigations — though these do not directly overturn the rule, they create political pressure and gather information for potential legislative action."
      },
      {
        label: "Part B",
        points: 1,
        prompt: "Explain how the principle of bureaucratic discretion relates to this scenario and why it creates tension with the principle of legislative intent.",
        keywords: ["discretion", "statutory authority", "chevron deference", "legislative intent", "ambiguity", "rulemaking", "delegation", "principal-agent", "expertise"],
        modelAnswer: "Bureaucratic discretion refers to the authority agencies have to interpret and implement legislation when statutes are ambiguous or when technical expertise is required. The EPA argues it has discretionary authority under the Clean Air Act to regulate carbon emissions. However, this creates tension with legislative intent — Congress may not have specifically intended to grant the EPA this power when it passed the original statute. Critics argue that allowing agencies to broadly interpret their statutory authority shifts lawmaking power from elected legislators to unelected bureaucrats, undermining democratic accountability. The Chevron doctrine (now limited by recent Supreme Court decisions) historically required courts to defer to agencies' reasonable interpretations of ambiguous statutes."
      },
      {
        label: "Part C",
        points: 1,
        prompt: "Explain one way the President could influence the EPA's regulatory actions, and one way this could create conflict with Congress.",
        keywords: ["executive order", "appoint", "removal", "director", "OMB", "review", "presidential directive", "veto", "override", "influence"],
        modelAnswer: "The President can direct the EPA's regulatory priorities through executive orders, appoint and potentially remove the EPA Administrator, and require the Office of Management and Budget (OMB) to review regulations before they are finalized. For example, the President could instruct the EPA to rescind the regulation. This creates conflict with Congress because if Congress has passed legislation directing the EPA to regulate environmental hazards, the President's attempt to override the agency's interpretation may be seen as undermining legislative will. Congress might respond with legislation specifically directing the EPA to maintain the rule, creating a confrontation between the branches."
      }
    ]
  },
  {
    id: 6,
    type: "scotus-comparison",
    title: "First Amendment and Campaign Finance",
    totalPoints: 4,
    scenario: `A state passed a law limiting the amount that corporations and labor unions can spend on political advertising in the 30 days before a state election. The state argues the law is necessary to prevent corruption and maintain the integrity of elections. A corporation that makes political documentaries challenged the law as a violation of its First Amendment rights.`,
    parts: [
      {
        label: "Part A",
        points: 1,
        prompt: "Identify the constitutional provision at issue in this scenario.",
        keywords: ["first amendment", "free speech", "freedom of speech", "political speech"],
        modelAnswer: "The Free Speech Clause of the First Amendment is at issue. The corporation argues that spending money on political advertising is a form of protected political speech, and that the state law unconstitutionally restricts that speech."
      },
      {
        label: "Part B",
        points: 1,
        prompt: "Describe the ruling in Citizens United v. FEC (2010) and explain how it applies to this scenario.",
        keywords: ["citizens united", "FEC", "independent expenditures", "corporations", "political speech", "money as speech", "BCRA", "unconstitutional", "first amendment"],
        modelAnswer: "In Citizens United v. FEC, the Supreme Court held 5-4 that political spending is a protected form of free speech under the First Amendment. The Court struck down provisions of the Bipartisan Campaign Reform Act that restricted corporations and unions from making independent expenditures in federal elections. Applying Citizens United to this scenario, the state law similarly restricts corporate political spending and would likely be found unconstitutional. Citizens United established that the government cannot restrict independent political expenditures based on the speaker's corporate status — political speech does not lose First Amendment protection simply because the source is a corporation."
      },
      {
        label: "Part C",
        points: 1,
        prompt: "Explain one argument a state could make to justify limiting corporate political spending despite the Citizens United precedent.",
        keywords: ["compelling interest", "anti-corruption", "quid pro quo", "state interest", "elections", "integrity", "distinguish", "independent expenditure", "direct contribution"],
        modelAnswer: "A state could argue that preventing quid pro quo corruption — a direct exchange of money for political favors — is a compelling government interest that justifies some campaign finance restrictions. The state could attempt to distinguish its law from Citizens United by arguing that the 30-day restriction is narrowly tailored to prevent the most acute corruption risks immediately before an election, and that the state has a stronger interest in regulating state elections than the federal government does. However, under Citizens United, the Court held that the mere appearance of influence or access does not constitute the type of corruption that justifies restrictions on independent expenditures."
      },
      {
        label: "Part D",
        points: 1,
        prompt: "Describe one potential consequence of the Citizens United decision on the democratic process.",
        keywords: ["super pac", "dark money", "influence", "wealthy", "corporations", "inequality", "elections", "spending", "candidate", "outside groups"],
        modelAnswer: "Citizens United led directly to the creation of Super PACs — political action committees that can raise unlimited funds from corporations, unions, and individuals for independent expenditures. This has dramatically increased the role of money in elections. One consequence is the rise of 'dark money' — funds spent by nonprofits that are not required to disclose their donors, making it difficult for voters to know who is funding political advertising. Critics argue this gives wealthy corporations and individuals disproportionate influence over elections, potentially undermining political equality and the principle of one person, one vote."
      }
    ]
  }
];

// ─── UNIT REVIEW DATA ────────────────────────────────────────
const UNIT_DATA = [
  {
    unit: 1,
    colorClass: "u1",
    title: "Foundations of American Democracy",
    examWeight: "15–22% of exam",
    icon: "🏛️",
    topics: [
      "Principles of constitutional government (popular sovereignty, limited government, separation of powers, checks and balances)",
      "The Constitutional Convention and compromises (Great Compromise, 3/5 Compromise, Electoral College)",
      "The Articles of Confederation and its weaknesses",
      "Federalism: dual, cooperative, and new federalism",
      "The Necessary & Proper Clause, Commerce Clause, Supremacy Clause",
      "The amendment process (Article V) and informal constitutional change",
      "McCulloch v. Maryland and United States v. Lopez"
    ],
    tip: "<strong>Exam focus:</strong> Know the major constitutional compromises and WHY they were made. Understand the spectrum from dual to cooperative federalism. Be ready to use McCulloch v. Maryland (expands federal power) and Lopez (limits federal power) in contrast."
  },
  {
    unit: 2,
    colorClass: "u2",
    title: "Interactions Among Branches of Government",
    examWeight: "25–36% of exam",
    icon: "⚖️",
    topics: [
      "Congressional structure, powers, and processes (lawmaking, budgeting, oversight)",
      "Presidential powers: formal (veto, commander in chief) and informal (bully pulpit, executive agreements)",
      "The federal bureaucracy: rulemaking, implementation, and agency types",
      "The federal judiciary: judicial review, selection, and independence",
      "Checks and balances in practice: vetoes, confirmations, judicial appointments",
      "Marbury v. Madison and judicial review",
      "Congressional-presidential conflict over foreign and domestic policy"
    ],
    tip: "<strong>Exam focus:</strong> This is the largest unit by exam weight. Know the specific formal and informal powers of each branch and how they check each other. Practice FRQs on the lawmaking process and judicial appointments."
  },
  {
    unit: 3,
    colorClass: "u3",
    title: "Civil Liberties and Civil Rights",
    examWeight: "13–18% of exam",
    icon: "🗽",
    topics: [
      "Bill of Rights: original application only to federal government",
      "Selective incorporation via the 14th Amendment's Due Process Clause",
      "First Amendment freedoms: religion (Establishment, Free Exercise), speech, press, assembly",
      "Second Amendment and McDonald v. Chicago",
      "Criminal procedure: 4th, 5th, 6th, 8th Amendment protections",
      "Equal protection and civil rights: Brown v. Board, modern equal protection analysis",
      "Privacy rights and substantive due process (Roe v. Wade, Dobbs)",
      "All 15 required SCOTUS cases"
    ],
    tip: "<strong>Exam focus:</strong> Selective incorporation is essential — know that the 14th Amendment applies Bill of Rights protections to states. Organize cases by the constitutional clause they address. Know the distinction between civil liberties (protection FROM government) and civil rights (equal treatment BY government)."
  },
  {
    unit: 4,
    colorClass: "u4",
    title: "American Political Ideologies and Beliefs",
    examWeight: "10–15% of exam",
    icon: "🗳️",
    topics: [
      "Political socialization: family, school, media, peer groups, religion",
      "Public opinion measurement: polls, sampling, bias, margin of error",
      "Liberal vs. conservative ideology: economic and social dimensions",
      "Ideological sorting and polarization",
      "Role of demographics in shaping political views (age, race, religion, education, region)",
      "American political culture: individualism, democracy, equality, free enterprise"
    ],
    tip: "<strong>Exam focus:</strong> Know the agents of political socialization and their relative importance. Understand how to read and analyze public opinion data. Be prepared for quantitative analysis FRQs using polling data."
  },
  {
    unit: 5,
    colorClass: "u5",
    title: "Political Participation",
    examWeight: "20–27% of exam",
    icon: "🗳️",
    topics: [
      "Voting: requirements, turnout, and factors affecting participation",
      "Electoral systems: winner-take-all vs. proportional representation",
      "The Electoral College: mechanics, criticisms, and reform proposals",
      "Political parties: structure, functions, and the two-party system",
      "Interest groups: types, lobbying, and their role in policy",
      "Media: types, role in campaigns, agenda-setting, framing",
      "Campaign finance: FEC, PACs, Super PACs, Citizens United v. FEC",
      "Baker v. Carr, Shaw v. Reno, and redistricting"
    ],
    tip: "<strong>Exam focus:</strong> Know the factors that increase and decrease voter turnout. Understand the Electoral College debate and the arguments for/against it. Citizens United is frequently tested in FRQs — know both the holding AND its consequences (Super PACs)."
  }
];
