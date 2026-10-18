/* Edit this file to replace the placeholder content. Keep assets inside assets/.
   Relative asset paths also work on Anonymous GitHub under /w/<anonymous-id>/.
   No author names, affiliations, personal links, or real GitHub URLs belong here. */
window.PROJECT = {
  name: "Multi-EVT",
  subtitle: "A new perspective.\nMultiple streams. One story.",
  kicker: "RESEARCH PROJECT · ANONYMOUS REVIEW",
  summary: "An interactive companion to Multi-EVT, bringing the core idea, visual demonstrations, and experimental evidence into one place.",
  // Set false after all illustrative text, graphics, and results have been replaced.
  showPlaceholderNotice: true,
  placeholderNotice: "Preview edition — text and graphics are illustrative placeholders. They do not describe validated Multi-EVT methods or results.",
  teaser: { src: "assets/teaser.svg", alt: "Illustrative input streams, shared representation, and output trajectory. Not the actual Multi-EVT architecture.", label: "ILLUSTRATIVE VISUAL", caption: "An illustrative overview of multiple streams coming together. Replace this panel with the project teaser or a representative result." },
  abstract: "This project page will present the motivation, approach, and findings of Multi-EVT. The current edition uses illustrative content to establish the reading experience: an overview of the research problem, a visual explanation of the method, and a set of qualitative and quantitative comparisons. The final abstract will summarize the actual task, central contribution, experimental setting, and main findings. All descriptions, diagrams, and demonstration panels shown here are placeholders pending the research materials.",
  takeaways: [
    { label: "THE QUESTION", title: "What is the core challenge?", text: "A short statement of the research problem and why it matters." },
    { label: "THE APPROACH", title: "What makes the idea different?", text: "The main technical insight, expressed in one or two clear sentences." },
    { label: "THE EVIDENCE", title: "What do the experiments show?", text: "The principal finding, supported by the final experiments." }
  ],
  demos: {
    note: "ILLUSTRATIVE MEDIA",
    intro: "A space for qualitative comparisons, representative sequences, and challenging cases. Select a category, then open a panel for a closer look.",
    footnote: "All panels currently show synthetic illustrations. Replace them with anonymized images or MP4 videos.",
    categories: [
      { id: "overview", label: "Overview", items: [
        { title: "A representative sequence", label: "EXAMPLE 01", description: "The main qualitative demonstration, shown at a glance.", src: "assets/demo-streams.svg", type: "image", alt: "Synthetic event-like dots tracing a moving object across three time steps." },
        { title: "Complementary perspectives", label: "EXAMPLE 02", description: "Multiple views of the same illustrative scene.", src: "assets/demo-views.svg", type: "image", alt: "Three abstract views of a synthetic geometric scene." }
      ] },
      { id: "comparison", label: "Comparisons", items: [
        { title: "Baseline / Multi-EVT", label: "COMPARISON SLOT", description: "Replace with a synchronized comparison and describe the visible difference.", src: "assets/demo-views.svg", type: "image", alt: "Illustrative comparison layout, with no measured performance claims." },
        { title: "Ablation study", label: "ABLATION SLOT", description: "Use this panel to explain the contribution of a specific component.", src: "assets/demo-streams.svg", type: "image", alt: "Synthetic illustration reserved for an ablation example." }
      ] },
      { id: "challenges", label: "Challenging cases", items: [
        { title: "A challenging setting", label: "CHALLENGE SLOT", description: "A difficult case, accompanied by the actual observations.", src: "assets/demo-streams.svg", type: "image", alt: "Synthetic illustration reserved for a challenging example." },
        { title: "Where the method falls short", label: "LIMITATION SLOT", description: "Document a representative failure or open challenge.", src: "assets/demo-views.svg", type: "image", alt: "Synthetic illustration reserved for a limitation example." }
      ] }
    ]
  },
  method: {
    intro: "A visual walkthrough of the approach. This generic pipeline reserves space for the actual architecture and its key components.",
    src: "assets/method.svg", alt: "Generic illustrative pipeline: input, encode, integrate, and predict. Not a claim about Multi-EVT.",
    caption: "Architecture placeholder. Replace with the final method figure; the stages below can be edited independently.",
    steps: [
      { title: "Represent", text: "Describe the input data, its representation, and any preprocessing used by the actual method." },
      { title: "Integrate", text: "Explain the central module and how information is combined or transformed." },
      { title: "Predict", text: "Introduce the output, training objective, and inference procedure." }
    ]
  },
  results: {
    intro: "A dedicated space for the main benchmark and ablations. Numbers remain unfilled until the experimental results are ready.",
    caption: "Benchmark comparison — pending experimental results",
    metrics: [{ label: "Primary metric", direction: "↑ higher is better", max: 100 }, { label: "Secondary metric", direction: "↑ higher is better", max: 100 }, { label: "Runtime", direction: "↓ lower is better", max: 100 }],
    // Values must be numbers or null. For example: [84.2, 79.0, 22.5].
    rows: [{ method: "Baseline A", values: [null, null, null] }, { method: "Baseline B", values: [null, null, null] }, { method: "Multi-EVT", values: [null, null, null], highlight: true }],
    note: "— indicates a result that has not been added. No performance numbers are implied by the placeholders.",
    limitations: "Replace this paragraph with the assumptions, evaluation boundaries, known failure cases, and remaining limitations of the actual project."
  },
  // Use an empty href until the file exists. Missing resources are shown as unavailable.
  // Local examples: assets/paper.pdf, assets/supplement.pdf, assets/overview.mp4.
  // Code link: use the generated https://anonymous.4open.science/r/... address only.
  resources: [
    { label: "Paper", detail: "Manuscript for anonymous review", href: "", icon: "paper" },
    { label: "Supplementary", detail: "Additional experiments and implementation details", href: "", icon: "supplement" },
    { label: "Anonymous code", detail: "Repository and reproducibility materials", href: "", icon: "code" }
  ],
  citation: "@misc{multievt_anonymous,\n  title  = {Multi-EVT},\n  author = {Anonymous Authors},\n  note   = {Anonymous submission; draft materials}\n}"
};
