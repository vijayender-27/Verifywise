import { Subcontrol } from "./subcontrol.model";

export const subcontrols = (
  controls: number[],
  userId1: number,
  userId2: number
): Subcontrol[] => {
  return [
    {
      title:
        "We ensure executive leadership takes responsibility for decisions related to AI risks",
      description:
        "Leadership is accountable for oversight and strategic decisions regarding AI risks, ensuring alignment with compliance.",
      order_no: 1,
      status: "Done",
      risk_review: "Acceptable risk",
      approver: userId1,
      owner: userId2,
      reviewer: userId1,
      due_date: new Date(new Date("2024-06-01")),
      implementation_details:
        "Established AI oversight committee with executive sponsors",
      evidence_description: "Committee charter and meeting minutes",
      feedback_description: "Positive engagement from leadership team",
      control_id: controls[0],
    },
    {
      title:
        "We provide AI literacy and ethics training to relevant personnel.",
      description:
        "Training equips employees to responsibly manage and understand AI systems, fostering ethics and legal adherence.",
      order_no: 2,
      status: "In progress",
      risk_review: "Residual risk",
      approver: userId1,
      owner: userId2,
      reviewer: userId1,
      due_date: new Date(new Date("2024-07-01")),
      implementation_details: "Developing online training modules",
      evidence_description: "Training curriculum draft",
      feedback_description: "Initial feedback from pilot group",
      control_id: controls[0],
    },
    {
      title:
        "We develop a clear and concise communication plan for informing workers about the use of high-risk AI systems in the workplace.",
      description:
        "A concise plan ensures employees are informed of AI system impacts in their workplace roles and rights.",
      order_no: 3,
      status: "Waiting",
      risk_review: "Unacceptable risk",
      approver: userId1,
      owner: userId2,
      reviewer: userId1,
      due_date: new Date(new Date("2024-07-30")),
      implementation_details: "Communication plan under development",
      control_id: controls[0],
    },
    {
      title:
        "We clearly define roles and responsibilities related to AI risk management.",
      description:
        "Roles and responsibilities streamline risk management and assign clear accountability for compliance efforts.",
      order_no: 1,
      status: "Waiting",
      risk_review: "Residual risk",
      approver: userId1,
      owner: userId2,
      reviewer: userId1,
      due_date: new Date(new Date("2024-08-01")),
      implementation_details: "Drafting role definitions",
      control_id: controls[1],
    },
    {
      title:
        "We train personnel on the requirements of the regulation and the process for responding to requests from competent authorities.",
      description:
        "Personnel training ensures efficient regulatory responses and familiarity with legal requirements for AI systems.",
      order_no: 2,
      status: "Waiting",
      risk_review: "Residual risk",
      approver: userId1,
      owner: userId2,
      reviewer: userId1,
      due_date: new Date(new Date("2024-08-15")),
      implementation_details: "Preparing training materials",
      control_id: controls[1],
    },
    {
      order_no: 1,
      title:
        "We provide detailed descriptions of the AI system''s intended use.",
      description:
        "Describing intended use prevents misuse, aligning AI deployment with specified legal and ethical boundaries.",
      status: "In progress",
      risk_review: "Acceptable risk",
      approver: userId1,
      owner: userId2,
      reviewer: userId1,
      due_date: new Date(new Date("2024-07-01")),
      implementation_details: "Drafting intended use documentation",
      control_id: controls[2],
    },
    {
      order_no: 1,
      title: "We review and verify technical documentation from providers.",
      description:
        "Reviewing documentation confirms provider accuracy and ensures adherence to standards and compliance needs.",
      status: "Waiting",
      risk_review: "Unacceptable risk",
      approver: userId1,
      owner: userId2,
      reviewer: userId1,
      due_date: new Date(new Date("2024-07-15")),
      implementation_details: "Collecting technical documentation",
      control_id: controls[3],
    },
    {
      order_no: 1,
      title:
        "We maintain accurate records of all AI system activities, including modifications and third-party involvements.",
      description:
        "Accurate records enhance traceability, support audits, and provide accountability for AI system activities.",
      status: "Done",
      risk_review: "Unacceptable risk",
      approver: userId1,
      owner: userId2,
      reviewer: userId1,
      due_date: new Date(new Date("2024-06-20")),
      implementation_details: "Updating record-keeping policies",
      control_id: controls[4],
    },
    {
      order_no: 1,
      title:
        "We document system information, including functionality, limitations, and risk controls.",
      description:
        "System documentation clarifies operations, limitations, and controls, aiding informed decision-making and safety.",
      status: "In progress",
      risk_review: "Acceptable risk",
      approver: userId1,
      owner: userId2,
      reviewer: userId1,
      due_date: new Date("2024-08-01"),
      implementation_details: "Compiling system documentation",
      control_id: controls[5],
    },
    {
      order_no: 2,
      title:
        "We define and document forbidden uses and foresee potential misuse.",
      description:
        "Defining forbidden uses helps anticipate misuse and mitigate risks proactively for safe AI applications.",
      status: "Waiting",
      risk_review: "Residual risk",
      approver: userId1,
      owner: userId2,
      reviewer: userId1,
      due_date: new Date("2024-08-15"),
      implementation_details: "Preparing forbidden use cases",
      control_id: controls[5],
    },
    {
      order_no: 1,
      title: "We describe training, validation, and testing datasets used.",
      description:
        "Dataset descriptions provide transparency in training, validation, and testing, ensuring alignment with standards.",
      status: "In progress",
      risk_review: "Unacceptable risk",
      approver: userId1,
      owner: userId2,
      reviewer: userId1,
      due_date: new Date("2024-07-10"),
      implementation_details: "Compiling dataset documentation",
      control_id: controls[6],
    },
    {
      order_no: 1,
      title: "We explain mitigation strategies and bias testing results.",
      description:
        "Explaining bias testing and mitigation highlights fairness measures and prevents harmful or unethical outcomes.",
      status: "Done",
      risk_review: "Acceptable risk",
      approver: userId1,
      owner: userId2,
      reviewer: userId1,
      due_date: new Date("2024-06-30"),
      implementation_details: "Finalizing bias analysis report",
      control_id: controls[7],
    },
    {
      order_no: 1,
      title:
        "We provide accuracy metrics, robustness, and cybersecurity information.",
      description:
        "Providing metrics ensures systems meet robustness and security criteria while fostering trust through transparency.",
      status: "In progress",
      risk_review: "Residual risk",
      approver: userId1,
      owner: userId2,
      reviewer: userId1,
      due_date: new Date("2024-08-05"),
      implementation_details: "Gathering performance metrics",
      control_id: controls[8],
    },
    {
      order_no: 1,
      title:
        "We define mechanisms for human intervention or override of AI outputs.",
      description:
        "Human intervention mechanisms ensure appropriate oversight, preventing harmful or unintended AI outcomes.",
      status: "Waiting",
      risk_review: "Residual risk",
      approver: userId1,
      owner: userId2,
      reviewer: userId1,
      due_date: new Date("2024-07-01"),
      implementation_details: "Designing intervention frameworks",
      control_id: controls[9],
    },
    {
      order_no: 2,
      title:
        "We assign competent individuals with authority to oversee AI system usage.",
      description:
        "Competent oversight personnel are essential for monitoring and ensuring safe and lawful AI usage.",
      status: "In progress",
      risk_review: "Acceptable risk",
      approver: userId1,
      owner: userId2,
      reviewer: userId1,
      due_date: new Date("2024-07-15"),
      implementation_details: "Selecting oversight personnel",
      control_id: controls[9],
    },
    {
      order_no: 3,
      title:
        "We align oversight measures with provider''s instructions for use.",
      description:
        "Aligning measures with provider instructions ensures system use remains within intended boundaries and purposes.",
      status: "Waiting",
      risk_review: "Unacceptable risk",
      approver: userId1,
      owner: userId2,
      reviewer: userId1,
      due_date: new Date("2024-08-01"),
      implementation_details: "Reviewing provider guidelines",
      control_id: controls[9],
    },
    {
      order_no: 1,
      title: "We document system limitations and human oversight options.",
      description:
        "Documentation ensures clarity on system boundaries and how human operators can intervene if needed.",
      status: "Done",
      risk_review: "Acceptable risk",
      approver: userId1,
      owner: userId2,
      reviewer: userId1,
      due_date: new Date("2024-06-15"),
      implementation_details: "Creating oversight documentation",
      control_id: controls[10],
    },
    {
      order_no: 2,
      title: "We establish appeal processes related to AI system decisions.",
      description:
        "Appeals processes provide a structured method for addressing disputes or adverse outcomes from AI system decisions.",
      status: "In progress",
      risk_review: "Residual risk",
      approver: userId1,
      owner: userId2,
      reviewer: userId1,
      due_date: new Date("2024-07-10"),
      implementation_details: "Developing appeal workflows",
      control_id: controls[10],
    },
    {
      order_no: 1,
      title:
        "We ensure clear communication of AI system capabilities, limitations, and risks to human operators.",
      description:
        "Clear communication helps operators understand the system’s scope and manage risks effectively.",
      status: "Waiting",
      risk_review: "Unacceptable risk",
      approver: userId1,
      owner: userId2,
      reviewer: userId1,
      due_date: new Date("2024-09-01"),
      implementation_details: "Drafting user communication materials",
      control_id: controls[11],
    },
    {
      order_no: 2,
      title:
        "We proportion oversight measures to match AI system''s risk level and autonomy.",
      description:
        "Oversight measures are scaled appropriately to reflect the system''s complexity, risk, and decision-making autonomy.",
      status: "In progress",
      risk_review: "Residual risk",
      approver: userId1,
      owner: userId2,
      reviewer: userId1,
      due_date: new Date("2024-08-20"),
      implementation_details: "Evaluating risk-based oversight",
      control_id: controls[11],
    },
    {
      order_no: 1,
      title:
        "We consult with diverse experts and end-users to inform corrective measures.",
      description:
        "Consulting experts and end-users ensures corrective measures are comprehensive and address real-world implications.",
      status: "In progress",
      risk_review: "Acceptable risk",
      approver: userId1,
      owner: userId2,
      reviewer: userId1,
      due_date: new Date("2024-07-10"),
      implementation_details: "Engaging stakeholders for feedback",
      control_id: controls[12],
    },
    {
      order_no: 1,
      title:
        "We validate and document system reliability and standards compliance.",
      description:
        "Validation and documentation demonstrate that systems operate reliably and meet required compliance standards.",
      status: "Done",
      risk_review: "Residual risk",
      approver: userId1,
      owner: userId2,
      reviewer: userId1,
      due_date: new Date("2024-06-20"),
      implementation_details: "Reviewing documentation and validation reports",
      control_id: controls[13],
    },
    {
      order_no: 2,
      title:
        "We sustain AI system value post-deployment through continuous improvements.",
      description:
        "Continuous improvements ensure AI systems remain effective, compliant, and aligned with user needs after deployment.",
      status: "Waiting",
      risk_review: "Unacceptable risk",
      approver: userId1,
      owner: userId2,
      reviewer: userId1,
      due_date: new Date("2024-09-01"),
      implementation_details: "Developing enhancement roadmap",
      control_id: controls[13],
    },
    {
      order_no: 1,
      title:
        "We implement corrective actions as required by Article 20 to address identified risks or issues.",
      description:
        "Prompt corrective actions address risks to maintain compliance and prevent harm resulting from system flaws.",
      status: "In progress",
      risk_review: "Acceptable risk",
      approver: userId1,
      owner: userId2,
      reviewer: userId1,
      due_date: new Date("2024-07-30"),
      implementation_details: "Executing remediation plan",
      control_id: controls[14],
    },
    {
      order_no: 2,
      title:
        "We ensure mechanisms are in place to withdraw, disable, or recall non-conforming AI systems.",
      description:
        "Effective mechanisms ensure non-conforming systems can be removed or disabled to prevent further risks.",
      status: "Waiting",
      risk_review: "Residual risk",
      approver: userId1,
      owner: userId2,
      reviewer: userId1,
      due_date: new Date("2024-08-10"),
      implementation_details: "Establishing system recall protocols",
      control_id: controls[14],
    },
    {
      order_no: 1,
      title: "We maintain documentation of corrective actions taken.",
      description:
        "Detailed records of corrective actions provide accountability and support audits or regulatory reviews.",
      status: "Done",
      risk_review: "Acceptable risk",
      approver: userId1,
      owner: userId2,
      reviewer: userId1,
      due_date: new Date("2024-05-25"),
      implementation_details: "Compiling compliance reports",
      control_id: controls[15],
    },
    {
      order_no: 1,
      title:
        "We conduct thorough due diligence before associating with high-risk AI systems.",
      description:
        "Comprehensive due diligence ensures third-party AI systems meet legal and ethical standards before adoption.",
      status: "Waiting",
      risk_review: "Residual risk",
      approver: userId1,
      owner: userId2,
      reviewer: userId1,
      due_date: new Date("2024-07-01"),
      implementation_details: "Reviewing third-party compliance reports",
      control_id: controls[16],
    },
    {
      order_no: 1,
      title:
        "We establish clear contractual agreements with AI system providers.",
      description:
        "Contracts define obligations and responsibilities, ensuring all parties comply with AI-related requirements.",
      status: "In progress",
      risk_review: "Acceptable risk",
      approver: userId1,
      owner: userId2,
      reviewer: userId1,
      due_date: new Date("2024-07-15"),
      implementation_details: "Drafting legal contract templates",
      control_id: controls[17],
    },
    {
      order_no: 1,
      title:
        "We define responsibilities in agreements with third-party suppliers of AI components.",
      description:
        "Specifying roles and responsibilities prevents gaps in accountability and ensures compliance along the AI supply chain.",
      status: "Done",
      risk_review: "Acceptable risk",
      approver: userId1,
      owner: userId2,
      reviewer: userId1,
      due_date: new Date("2024-06-30"),
      implementation_details: "Finalizing agreement templates",
      control_id: controls[18],
    },
    {
      order_no: 1,
      title:
        "We specify information, technical access, and support required for regulatory compliance.",
      description:
        "Clear specifications for information and support ensure smooth regulatory processes and timely compliance responses.",
      status: "Waiting",
      risk_review: "Unacceptable risk",
      approver: userId1,
      owner: userId2,
      reviewer: userId1,
      due_date: new Date("2024-08-10"),
      implementation_details: "Creating technical access requirements document",
      control_id: controls[19],
    },
    {
      order_no: 1,
      title:
        "We ensure third-party impacts, such as IP infringement, meet organizational standards.",
      description:
        "Third-party compliance with organizational standards prevents risks like intellectual property violations.",
      status: "In progress",
      risk_review: "Residual risk",
      approver: userId1,
      owner: userId2,
      reviewer: userId1,
      due_date: new Date("2024-08-20"),
      implementation_details: "Auditing third-party licensing agreements",
      control_id: controls[20],
    },
    {
      order_no: 1,
      title:
        "We maintain mechanisms to deactivate AI systems if performance deviates from intended use.",
      description:
        "Deactivation mechanisms ensure systems can be stopped to mitigate risks if they perform outside intended parameters.",
      status: "Waiting",
      risk_review: "Unacceptable risk",
      approver: userId1,
      owner: userId2,
      reviewer: userId1,
      due_date: new Date("2024-09-01"),
      implementation_details: "Developing shutdown protocols",
      control_id: controls[21],
    },
    {
      order_no: 1,
      title:
        "We monitor and respond to incidents involving third-party components.",
      description:
        "Monitoring ensures timely detection and resolution of issues with third-party AI components to maintain compliance.",
      status: "In progress",
      risk_review: "Residual risk",
      approver: userId1,
      owner: userId2,
      reviewer: userId1,
      due_date: new Date("2024-07-25"),
      implementation_details: "Implementing incident response framework",
      control_id: controls[22],
    },
    {
      order_no: 1,
      title:
        "We implement measures to enhance AI system resilience against errors and faults.",
      description:
        "Validation and documentation demonstrate that systems operate reliably and meet required compliance standards.",
      status: "Done",
      risk_review: "Acceptable risk",
      approver: userId1,
      owner: userId2,
      reviewer: userId1,
      due_date: new Date("2024-06-15"),
      implementation_details: "Testing and validating AI systems",
      control_id: controls[23],
    },
    {
      order_no: 1,
      title:
        "We identify and assess potential non-conformities with regulations.",
      description:
        "Identifying non-conformities proactively reduces regulatory risks and ensures continued compliance.",
      status: "Waiting",
      risk_review: "Unacceptable risk",
      approver: userId1,
      owner: userId2,
      reviewer: userId1,
      due_date: new Date("2024-09-10"),
      implementation_details: "Conducting compliance audits",
      control_id: controls[24],
    },
    {
      title:
        "We document roles, responsibilities, and communication lines for AI risk management.",
      description:
        "Clear documentation streamlines accountability and coordination in managing AI-related risks.",
      order_no: 1,
      status: "In progress",
      risk_review: "Residual risk",
      approver: userId1,
      owner: userId2,
      reviewer: userId1,
      due_date: new Date("2024-07-01"),
      implementation_details:
        "Created a detailed AI risk management framework.",
      evidence_description: "Framework document and stakeholder sign-off.",
      feedback_description: "Need additional details on communication flow.",
      control_id: controls[25],
    },
    {
      title: "We develop policies and guidelines for AI Act compliance.",
      description:
        "Policies and guidelines provide a structured framework for meeting AI Act requirements across the organization.",
      order_no: 2,
      status: "Waiting",
      risk_review: "Unacceptable risk",
      approver: userId1,
      owner: userId2,
      reviewer: userId1,
      due_date: new Date("2024-08-01"),
      implementation_details: "Initial draft created, pending review.",
      evidence_description: "Draft document shared with stakeholders.",
      feedback_description: "Requires additional legal input.",
      control_id: controls[25],
    },
    {
      title:
        "We plan responses to AI system risks, including defining risk tolerance and mitigation strategies.",
      description:
        "Risk response plans prepare organizations to manage and mitigate AI-related risks effectively and within acceptable limits.",
      order_no: 1,
      status: "Done",
      risk_review: "Acceptable risk",
      approver: userId1,
      owner: userId2,
      reviewer: userId1,
      due_date: new Date("2024-06-15"),
      implementation_details: "Developed a detailed AI risk response matrix.",
      evidence_description: "Risk response strategy document.",
      feedback_description: "Well-defined and structured approach.",
      control_id: controls[26],
    },
    {
      title:
        "We implement technical and organizational measures to adhere to AI system instructions for use.",
      description:
        "These measures ensure systems operate within their intended scope and comply with provided instructions.",
      order_no: 1,
      status: "In progress",
      risk_review: "Residual risk",
      approver: userId1,
      owner: userId2,
      reviewer: userId1,
      due_date: new Date("2024-07-10"),
      implementation_details: "Defined technical compliance measures.",
      evidence_description: "Compliance checklist and test results.",
      feedback_description: "Some areas need more rigorous validation.",
      control_id: controls[27],
    },
    {
      title:
        "We regularly evaluate safety, transparency, accountability, security, and resilience of AI systems.",
      description:
        "Regular evaluations help maintain system integrity and alignment with evolving regulatory and operational standards.",
      order_no: 2,
      status: "Waiting",
      risk_review: "Unacceptable risk",
      approver: userId1,
      owner: userId2,
      reviewer: userId1,
      due_date: new Date("2024-09-01"),
      implementation_details: "Scheduled bi-annual AI system evaluations.",
      evidence_description: "Evaluation framework and initial assessment.",
      feedback_description: "Needs more emphasis on security measures.",
      control_id: controls[27],
    },
    {
      order_no: 1,
      title:
        "We conduct thorough legal reviews relevant to AI system deployment.",
      description:
        "Legal reviews ensure AI systems comply with all applicable laws, minimizing regulatory and legal risks.",
      status: "In progress",
      risk_review: "Residual risk",
      approver: userId1,
      owner: userId2,
      reviewer: userId1,
      due_date: new Date("2024-06-15"),
      implementation_details:
        "Established a legal compliance framework for AI deployment",
      evidence_description:
        "Legal assessment reports and compliance checklists",
      feedback_description: "Needs further alignment with regional laws",
      control_id: controls[28],
    },
    {
      order_no: 2,
      title:
        "We prioritize risk responses based on impact, likelihood, and resources.",
      description:
        "Prioritizing risks helps allocate resources effectively and address the most critical threats first.",
      status: "Waiting",
      risk_review: "Unacceptable risk",
      approver: userId1,
      owner: userId2,
      reviewer: userId1,
      due_date: new Date("2024-07-01"),
      implementation_details: "Risk prioritization framework implemented",
      evidence_description: "Risk assessment reports",
      feedback_description:
        "Consider further refinement of prioritization criteria",
      control_id: controls[28],
    },
    {
      order_no: 3,
      title: "We identify residual risks to users and stakeholders.",
      description:
        "Identifying residual risks ensures informed decisions about mitigation and system deployment.",
      status: "Done",
      risk_review: "Acceptable risk",
      approver: userId1,
      owner: userId2,
      reviewer: userId1,
      due_date: new Date("2024-05-20"),
      implementation_details: "Residual risk analysis completed",
      evidence_description: "Residual risk documentation and impact analysis",
      feedback_description: "Well documented, minor clarifications required",
      control_id: controls[28],
    },
    {
      order_no: 4,
      title:
        "We evaluate if AI systems meet objectives and decide on deployment continuation.",
      description:
        "Regular evaluations verify that systems are achieving their goals and remain suitable for continued use.",
      status: "In progress",
      risk_review: "Residual risk",
      approver: userId1,
      owner: userId2,
      reviewer: userId1,
      due_date: new Date("2024-08-10"),
      implementation_details: "Periodic evaluation process established",
      evidence_description: "Evaluation reports and performance metrics",
      feedback_description: "Consider more frequent assessments",
      control_id: controls[28],
    },
    {
      order_no: 5,
      title: "We implement cybersecurity controls to protect AI models.",
      description:
        "Robust cybersecurity measures safeguard AI systems from breaches, tampering, and malicious exploitation.",
      status: "Waiting",
      risk_review: "Unacceptable risk",
      approver: userId1,
      owner: userId2,
      reviewer: userId1,
      due_date: new Date("2024-09-01"),
      implementation_details: "Cybersecurity protocols defined and enforced",
      evidence_description:
        "Security audit reports and vulnerability assessments",
      feedback_description: "Further penetration testing recommended",
      control_id: controls[28],
    },
    {
      order_no: 6,
      title:
        "We document system risk controls, including third-party components.",
      description:
        "Comprehensive documentation of risk controls ensures accountability and supports audits or compliance checks.",
      status: "Done",
      risk_review: "Acceptable risk",
      approver: userId1,
      owner: userId2,
      reviewer: userId1,
      due_date: new Date("2024-04-30"),
      implementation_details: "Detailed risk control documentation finalized",
      evidence_description:
        "Risk control register and third-party risk assessments",
      feedback_description: "Comprehensive documentation, well received",
      control_id: controls[28],
    },
    {
      title:
        "We regularly update compliance measures based on system or regulatory changes.",
      description:
        "Ongoing updates ensure compliance measures remain aligned with evolving technologies and legal requirements.",
      order_no: 1,
      status: "In progress",
      risk_review: "Residual risk",
      approver: userId1,
      owner: userId2,
      reviewer: userId1,
      due_date: new Date("2024-06-15"),
      implementation_details: "Scheduled quarterly compliance review meetings.",
      evidence_description: "Meeting notes and compliance updates.",
      feedback_description: "Stakeholders requested additional legal insights.",
      control_id: controls[29],
    },
    {
      title:
        "We explain AI models to ensure responsible use and maintain an AI systems repository.",
      description:
        "Clear explanations of AI models support transparency and facilitate responsible usage across stakeholders.",
      order_no: 2,
      status: "Waiting",
      risk_review: "Acceptable risk",
      approver: userId1,
      owner: userId2,
      reviewer: userId1,
      due_date: new Date("2024-07-01"),
      implementation_details: "Created documentation template for AI models.",
      evidence_description:
        "Drafted model explanations and repository structure.",
      feedback_description: "Awaiting feedback from technical teams.",
      control_id: controls[30],
    },
    {
      title:
        "We maintain and update technical documentation reflecting system changes.",
      description:
        "Up-to-date documentation ensures accurate representation of system functionalities and compliance status.",
      order_no: 3,
      status: "Done",
      risk_review: "Acceptable risk",
      approver: userId1,
      owner: userId2,
      reviewer: userId1,
      due_date: new Date("2024-05-20"),
      implementation_details:
        "Updated API documentation to reflect recent system updates.",
      evidence_description: "Versioned documentation repository and changelog.",
      feedback_description: "Positive feedback from developers and auditors.",
      control_id: controls[31],
    },
    {
      title: "We assess input data relevance and representativeness.",
      description:
        "Data assessments ensure that AI inputs are appropriate, unbiased, and aligned with the intended purpose.",
      order_no: 4,
      status: "In progress",
      risk_review: "Residual risk",
      approver: userId1,
      owner: userId2,
      reviewer: userId1,
      due_date: new Date("2024-06-30"),
      implementation_details:
        "Conducted initial bias analysis on training datasets.",
      evidence_description: "Bias assessment report and dataset statistics.",
      feedback_description:
        "Further refinement suggested for demographic representation.",
      control_id: controls[32],
    },
    {
      title:
        "We implement automatic logging of AI system operations and retain logs appropriately.",
      description:
        "Automatic logging ensures traceability of system activities, aiding in audits, troubleshooting, and compliance.",
      order_no: 5,
      status: "Waiting",
      risk_review: "Unacceptable risk",
      approver: userId1,
      owner: userId2,
      reviewer: userId1,
      due_date: new Date("2024-08-01"),
      implementation_details:
        "Designed logging framework and retention policy.",
      evidence_description: "System logs and retention policy document.",
      feedback_description: "Pending security team approval.",
      control_id: controls[33],
    },
    {
      title:
        "We develop a comprehensive process for fundamental rights impact assessments.",
      description:
        "A structured assessment process identifies and mitigates risks to fundamental rights posed by AI systems.",
      order_no: 1,
      status: "In progress",
      risk_review: "Residual risk",
      approver: userId1,
      owner: userId2,
      reviewer: userId1,
      due_date: new Date("2024-07-15"),
      implementation_details: "Initiating workshops for impact assessment",
      evidence_description:
        "Initial draft of fundamental rights assessment template",
      feedback_description: "Team is working on finalizing assessment steps",
      control_id: controls[34],
    },
    {
      title:
        "We describe deployer processes for using high-risk AI systems, outlining intended purposes.",
      description:
        "Detailed process descriptions ensure transparency in how high-risk systems are deployed and their intended use cases.",
      order_no: 1,
      status: "Waiting",
      risk_review: "Unacceptable risk",
      approver: userId1,
      owner: userId2,
      reviewer: userId1,
      due_date: new Date("2024-08-01"),
      implementation_details:
        "Defining standard operating procedures for AI deployers",
      evidence_description:
        "SOPs document outlining high-risk AI system processes",
      feedback_description: "Pending review of deployer processes",
      control_id: controls[35],
    },
    {
      title:
        "Identify all natural persons and groups potentially affected by AI system usage.",
      description:
        "Identifying impacted individuals and groups helps address potential risks and design systems responsibly.",
      order_no: 1,
      status: "Done",
      risk_review: "Acceptable risk",
      approver: userId1,
      owner: userId2,
      reviewer: userId1,
      due_date: new Date("2024-06-30"),
      implementation_details:
        "Conducted stakeholder mapping and impact assessment",
      evidence_description:
        "List of affected individuals and groups with impact assessments",
      feedback_description:
        "Clear identification of stakeholders and impacted groups",
      control_id: controls[36],
    },
    {
      title:
        "We assess data used by AI systems based on legal definitions (e.g., GDPR Article 3 (32)).",
      description:
        "Data assessments ensure compliance with legal frameworks and support ethical use of personal data in AI systems.",
      order_no: 1,
      status: "In progress",
      risk_review: "Residual risk",
      approver: userId1,
      owner: userId2,
      reviewer: userId1,
      due_date: new Date("2024-09-10"),
      implementation_details: "Reviewing all data types in use for compliance",
      evidence_description: "Data classification and compliance checklist",
      feedback_description: "Initial data review completed, ongoing assessment",
      control_id: controls[37],
    },
    {
      title:
        "We create and periodically re-evaluate strategies for measuring AI system impacts.",
      description:
        "Re-evaluating strategies ensures continued relevance and effectiveness in managing AI system impacts.",
      order_no: 1,
      status: "Waiting",
      risk_review: "Unacceptable risk",
      approver: userId1,
      owner: userId2,
      reviewer: userId1,
      due_date: new Date("2024-10-01"),
      implementation_details: "Setting up strategy evaluation workshops",
      evidence_description:
        "Strategy review meeting notes and evaluation criteria",
      feedback_description: "Awaiting approval of re-evaluation plan",
      control_id: controls[38],
    },
    {
      title:
        "We regularly evaluate bias, fairness, privacy, and environmental issues related to AI systems.",
      description:
        "Regular evaluations help ensure AI systems are ethical, equitable, and environmentally sustainable.",
      order_no: 1,
      status: "In progress",
      risk_review: "Residual risk",
      approver: userId1,
      owner: userId2,
      reviewer: userId1,
      due_date: new Date("2024-09-15"),
      implementation_details:
        "Conducted quarterly bias and fairness assessments",
      evidence_description: "Bias audit reports and privacy assessments",
      feedback_description: "Evaluation reports submitted for review",
      control_id: controls[39],
    },
    {
      title:
        "We document known or foreseeable risks to health, safety, or fundamental rights.",
      description:
        "Documenting risks provides transparency and helps stakeholders make informed decisions regarding system deployment.",
      order_no: 1,
      status: "Waiting",
      risk_review: "Unacceptable risk",
      approver: userId1,
      owner: userId2,
      reviewer: userId1,
      due_date: new Date("2024-07-10"),
      implementation_details:
        "Created a risk registry with identified health and safety risks",
      evidence_description: "Risk assessment documentation and risk register",
      feedback_description: "Pending feedback from health and safety team",
      control_id: controls[40],
    },
    {
      title:
        "We maintain assessment documentation, including dates, results, and actions taken.",
      description:
        "Detailed assessment records ensure accountability and facilitate compliance reviews or audits.",
      order_no: 1,
      status: "Done",
      risk_review: "Acceptable risk",
      approver: userId1,
      owner: userId2,
      reviewer: userId1,
      due_date: new Date("2024-05-30"),
      implementation_details:
        "Documented assessment outcomes and actions taken",
      evidence_description: "Assessment reports with audit trail",
      feedback_description: "All documentation has been reviewed and finalized",
      control_id: controls[41],
    },
    {
      title:
        "We integrate fundamental rights impact assessments with existing data protection assessments.",
      description:
        "Combining assessments provides a holistic view of risks and ensures consistency across regulatory compliance efforts.",
      order_no: 1,
      status: "In progress",
      risk_review: "Residual risk",
      approver: userId1,
      owner: userId2,
      reviewer: userId1,
      due_date: new Date("2024-08-20"),
      implementation_details:
        "Integrated fundamental rights considerations into data protection reviews",
      evidence_description: "Integrated assessment reports and impact analyses",
      feedback_description: "Awaiting feedback from legal team",
      control_id: controls[42],
    },
    {
      title:
        "We specify input data and details about training, validation, and testing datasets.",
      description:
        "Clear documentation of datasets ensures transparency and supports validation of AI system performance.",
      order_no: 1,
      status: "Done",
      risk_review: "Acceptable risk",
      approver: userId1,
      owner: userId2,
      reviewer: userId1,
      due_date: new Date("2024-04-25"),
      implementation_details:
        "Documented and published training and testing datasets",
      evidence_description: "Dataset documentation and validation results",
      feedback_description: "Completed dataset review with no further issues",
      control_id: controls[43],
    },
    {
      title: "We ensure representative evaluations when using human subjects.",
      description:
        "Representative evaluations protect fairness and ensure that findings are applicable across relevant user groups.",
      order_no: 2,
      status: "In progress",
      risk_review: "Unacceptable risk",
      approver: userId1,
      owner: userId2,
      reviewer: userId1,
      due_date: new Date("2024-11-05"),
      implementation_details:
        "Initiated recruitment for representative sample evaluations",
      evidence_description: "Evaluation reports and participant demographics",
      feedback_description: "Participant recruitment in progress",
      control_id: controls[43],
    },
    {
      order_no: 1,
      title:
        "We design AI systems to clearly indicate user interaction with AI.",
      description:
        "Clear indicators help users understand when they are interacting with AI, promoting transparency and trust.",
      status: "In progress",
      risk_review: "Residual risk",
      approver: userId1,
      owner: userId2,
      reviewer: userId1,
      due_date: new Date("2025-05-01"),
      implementation_details:
        "Indicators will be displayed at key touchpoints of the user journey.",
      evidence_description:
        "Mockup of system interface with AI indicator is available.",
      feedback_description: "Awaiting user feedback on interface design.",
      control_id: controls[44],
    },
    {
      order_no: 1,
      title: "We inform users when they are subject to AI system usage.",
      description:
        "Transparent communication ensures users are aware of and consent to AI system interactions affecting them.",
      status: "Done",
      risk_review: "Acceptable risk",
      approver: userId1,
      owner: userId2,
      reviewer: userId1,
      due_date: new Date("2025-03-15"),
      implementation_details:
        "Notifications will be sent to users before AI interaction.",
      evidence_description:
        "Email template and pop-up notification scripts are prepared.",
      feedback_description: "Positive feedback from initial user testing.",
      control_id: controls[45],
    },
    {
      order_no: 2,
      title:
        "We ensure AI indications are clear and understandable for reasonably informed users.",
      description:
        "Providing clear, simple AI indications allows users to make informed decisions and understand system limitations.",
      status: "Waiting",
      risk_review: "Unacceptable risk",
      approver: userId1,
      owner: userId2,
      reviewer: userId1,
      due_date: new Date("2025-06-10"),
      implementation_details:
        "AI indications will use simple language and accessible design.",
      evidence_description: "Preliminary design outlines available.",
      feedback_description: "No feedback yet.",
      control_id: controls[45],
    },
    {
      order_no: 1,
      title:
        "We define and document AI system scope, goals, methods, and potential impacts.",
      description:
        "Comprehensive documentation helps align AI deployment with intended goals and prepares for potential risks.",
      status: "In progress",
      risk_review: "Residual risk",
      approver: userId1,
      owner: userId2,
      reviewer: userId1,
      due_date: new Date("2025-07-01"),
      implementation_details:
        "System documentation is being drafted, with input from cross-functional teams.",
      evidence_description: "Draft document available for review.",
      feedback_description:
        "Feedback from technical team is being incorporated.",
      control_id: controls[46],
    },
    {
      order_no: 1,
      title:
        "We maintain accurate records of AI system activities, modifications, and third-party involvements.",
      description:
        "Accurate records ensure accountability and support audits, troubleshooting, and regulatory compliance.",
      status: "Done",
      risk_review: "Acceptable risk",
      approver: userId1,
      owner: userId2,
      reviewer: userId1,
      due_date: new Date("2025-02-28"),
      implementation_details:
        "Records are stored in a secure, centralized repository.",
      evidence_description: "System log files and change history available.",
      feedback_description: "Audit passed with no issues.",
      control_id: controls[47],
    },
    {
      title: "We complete the relevant conformity assessment procedures.",
      description:
        "Completing assessments ensures that AI systems meet required safety and compliance standards before deployment.",
      order_no: 1,
      status: "Done",
      risk_review: "Acceptable risk",
      approver: userId1,
      owner: userId2,
      reviewer: userId1,
      due_date: new Date("2024-06-01"),
      implementation_details:
        "AI systems were assessed for safety and compliance.",
      evidence_description: "Conformity assessment reports and certifications.",
      feedback_description: "All assessments met compliance standards.",
      control_id: controls[48],
    },
    {
      title:
        "We verify that high-risk AI systems have the required CE marking.",
      description:
        "CE marking confirms that high-risk AI systems meet EU regulatory requirements, ensuring safety and compliance.",
      order_no: 2,
      status: "In progress",
      risk_review: "Residual risk",
      approver: userId1,
      owner: userId2,
      reviewer: userId1,
      due_date: new Date("2024-07-15"),
      implementation_details: "Verification of CE marking for AI systems.",
      evidence_description: "Documentation of CE marking verification.",
      feedback_description: "Verification process underway.",
      control_id: controls[48],
    },
    {
      title:
        "We ensure AI systems are registered in the EU database per Article 71.",
      description:
        "Registering systems ensures compliance with EU AI Act requirements and facilitates monitoring and transparency.",
      order_no: 1,
      status: "Done",
      risk_review: "Acceptable risk",
      approver: userId1,
      owner: userId2,
      reviewer: userId1,
      due_date: new Date("2024-05-01"),
      implementation_details: "All AI systems registered in the EU database.",
      evidence_description: "Registration confirmations from the EU database.",
      feedback_description: "Successful registration and database update.",
      control_id: controls[49],
    },
    {
      title:
        "We identify necessary technical standards and certifications for AI systems.",
      description:
        "Identifying relevant standards ensures systems are developed and deployed in compliance with industry and legal requirements.",
      order_no: 1,
      status: "In progress",
      risk_review: "Residual risk",
      approver: userId1,
      owner: userId2,
      reviewer: userId1,
      due_date: new Date("2024-08-01"),
      implementation_details: "Technical standards for AI systems identified.",
      evidence_description:
        "List of required technical certifications and standards.",
      feedback_description: "Standards identification in progress.",
      control_id: controls[50],
    },
    {
      title:
        "We comply with common specifications established by the Commission.",
      description:
        "Adhering to common specifications ensures systems meet regulatory benchmarks for safety, reliability, and performance.",
      order_no: 1,
      status: "Done",
      risk_review: "Acceptable risk",
      approver: userId1,
      owner: userId2,
      reviewer: userId1,
      due_date: new Date("2024-06-15"),
      implementation_details:
        "Compliance with Commission-established specifications confirmed.",
      evidence_description: "Compliance reports and certification.",
      feedback_description: "System compliance confirmed and documented.",
      control_id: controls[51],
    },
    {
      title: "We keep records of all registration activities and updates.",
      description:
        "Maintaining detailed records supports transparency, accountability, and regulatory compliance during system registration.",
      order_no: 1,
      status: "Done",
      risk_review: "Acceptable risk",
      approver: userId1,
      owner: userId2,
      reviewer: userId1,
      due_date: new Date("2024-09-01"),
      implementation_details:
        "Comprehensive records maintained for all registration updates.",
      evidence_description: "Records of registration activities and updates.",
      feedback_description: "Records management is complete and up-to-date.",
      control_id: controls[52],
    },
    {
      title: "Ensure timely and accurate data entry into the EU database.",
      description:
        "Accurate and timely data entry ensures compliance with regulatory requirements and keeps the database current.",
      order_no: 1,
      status: "In progress",
      risk_review: "Residual risk",
      approver: userId1,
      owner: userId2,
      reviewer: userId1,
      due_date: new Date("2024-10-01"),
      implementation_details:
        "Timely data entry into the EU database is being ensured.",
      evidence_description: "Data entry logs and database updates.",
      feedback_description: "Data entry is ongoing with minimal issues.",
      control_id: controls[53],
    },
    {
      title:
        "We maintain up-to-date registration information and comprehensive conformity documentation.",
      description:
        "Keeping documentation updated ensures alignment with changes in regulations and system configurations.",
      order_no: 1,
      status: "Done",
      risk_review: "Acceptable risk",
      approver: userId1,
      owner: userId2,
      reviewer: userId1,
      due_date: new Date("2024-06-30"),
      implementation_details:
        "All registration information and conformity documentation updated.",
      evidence_description:
        "Updated documentation and conformity certifications.",
      feedback_description: "All information is now up to date and verified.",
      control_id: controls[54],
    },
    {
      title:
        "We engage with notified bodies or conduct internal conformity assessments.",
      description:
        "Collaboration with notified bodies or conducting internal reviews ensures rigorous evaluation of AI system compliance.",
      order_no: 1,
      status: "In progress",
      risk_review: "Residual risk",
      approver: userId1,
      owner: userId2,
      reviewer: userId1,
      due_date: new Date("2024-06-15"),
      implementation_details:
        "Initiated internal assessments and began collaboration with notified bodies",
      evidence_description:
        "Internal audit reports and notified body assessment results",
      feedback_description: "Ongoing collaboration with external bodies",
      control_id: controls[55],
    },
    {
      title:
        "We establish processes to respond to national authority requests.",
      description:
        "Well-defined processes enable efficient and accurate responses to regulatory inquiries or audits.",
      order_no: 1,
      status: "Waiting",
      risk_review: "Unacceptable risk",
      approver: userId1,
      owner: userId2,
      reviewer: userId1,
      due_date: new Date("2024-07-01"),
      implementation_details:
        "Documenting and setting up internal processes for regulatory inquiries",
      evidence_description:
        "Standard operating procedures (SOP) for responding to authority requests",
      feedback_description: "Need further alignment on procedures",
      control_id: controls[56],
    },
    {
      title: "We maintain thorough documentation of AI system conformity.",
      description:
        "Comprehensive conformity documentation demonstrates adherence to legal standards and supports regulatory reporting.",
      order_no: 1,
      status: "Done",
      risk_review: "Acceptable risk",
      approver: userId1,
      owner: userId2,
      reviewer: userId1,
      due_date: new Date("2024-05-15"),
      implementation_details:
        "Completed AI system conformity documentation for reporting",
      evidence_description:
        "Compliance documentation and regulatory submissions",
      feedback_description: "Successfully met all compliance requirements",
      control_id: controls[57],
    },
    {
      title: "We keep records of registration and any subsequent updates.",
      description:
        "Detailed records of registration activities provide transparency and facilitate compliance verification.",
      order_no: 2,
      status: "In progress",
      risk_review: "Residual risk",
      approver: userId1,
      owner: userId2,
      reviewer: userId1,
      due_date: new Date("2024-06-20"),
      implementation_details:
        "Developed a centralized registry for tracking AI system updates",
      evidence_description: "Registration documents and update logs",
      feedback_description:
        "Further work needed on the central database integration",
      control_id: controls[57],
    },
    {
      title: "We ensure timely and accurate data entry into the EU database.",
      description:
        "Ensuring timely updates maintains regulatory compliance and fosters trust in system integrity and monitoring processes.",
      order_no: 1,
      status: "Done",
      risk_review: "Acceptable risk",
      approver: userId1,
      owner: userId2,
      reviewer: userId1,
      due_date: new Date("2024-05-01"),
      implementation_details:
        "All required data entries completed in the EU database",
      evidence_description: "Database update logs and compliance confirmations",
      feedback_description: "Data entry process completed smoothly",
      control_id: controls[58],
    },
    {
      title: "We define methods and tools for measuring AI system impacts.",
      description:
        "Establishing methods and tools ensures consistent evaluation of AI system effects on users, stakeholders, and society.",
      order_no: 1,
      status: "Done",
      risk_review: "Acceptable risk",
      approver: userId1,
      owner: userId2,
      reviewer: userId1,
      due_date: new Date("2024-06-01"),
      implementation_details: "Developed a set of AI impact assessment tools",
      evidence_description: "Impact assessment reports and tools documentation",
      feedback_description:
        "Tools are effective in identifying AI system impacts",
      control_id: controls[59],
    },
    {
      title: "We monitor AI system operations based on usage instructions.",
      description:
        "Monitoring ensures systems operate within intended parameters and quickly identifies deviations.",
      order_no: 1,
      status: "In progress",
      risk_review: "Residual risk",
      approver: userId1,
      owner: userId2,
      reviewer: userId1,
      due_date: new Date("2024-06-15"),
      implementation_details:
        "Set up continuous monitoring tools for AI systems",
      evidence_description: "System monitoring logs and dashboards",
      feedback_description:
        "Monitoring system has helped identify deviations early",
      control_id: controls[60],
    },
    {
      title:
        "We track and respond to errors and incidents through measurable activities.",
      description:
        "Effective tracking and response minimize the impact of errors and improve system resilience and compliance.",
      order_no: 1,
      status: "Done",
      risk_review: "Unacceptable risk",
      approver: userId1,
      owner: userId2,
      reviewer: userId1,
      due_date: new Date("2024-05-10"),
      implementation_details:
        "Implemented an error tracking and response system",
      evidence_description: "Incident logs, response actions, and resolutions",
      feedback_description: "The system ensures quick recovery and compliance",
      control_id: controls[61],
    },
    {
      title: "We consult with experts and end-users to inform risk management.",
      description:
        "Input from diverse perspectives ensures risk management strategies are comprehensive and practical.",
      order_no: 1,
      status: "In progress",
      risk_review: "Acceptable risk",
      approver: userId1,
      owner: userId2,
      reviewer: userId1,
      due_date: new Date("2024-07-01"),
      implementation_details:
        "Conducted expert and user consultations for risk assessment",
      evidence_description: "Consultation summaries and reports",
      feedback_description:
        "Stakeholders provided valuable insights for risk management",
      control_id: controls[62],
    },
    {
      title:
        "We continuously evaluate if AI systems meet objectives and decide on ongoing deployment.",
      description:
        "Regular evaluations ensure systems continue to fulfill their intended purpose and remain aligned with organizational goals.",
      order_no: 1,
      status: "Done",
      risk_review: "Acceptable risk",
      approver: userId1,
      owner: userId2,
      reviewer: userId1,
      due_date: new Date("2024-06-20"),
      implementation_details: "Set up periodic AI system evaluations",
      evidence_description: "Evaluation reports and deployment decisions",
      feedback_description:
        "Ongoing evaluations ensure alignment with business goals",
      control_id: controls[63],
    },
    {
      title: "We document pre-determined changes and performance metrics.",
      description:
        "Documentation of changes and metrics supports traceability and ensures that modifications are aligned with compliance.",
      order_no: 2,
      status: "Done",
      risk_review: "Residual risk",
      approver: userId1,
      owner: userId2,
      reviewer: userId1,
      due_date: new Date("2024-06-30"),
      implementation_details:
        "Established a system for documenting changes and metrics",
      evidence_description: "Change logs and performance metric records",
      feedback_description: "Documentation process has enhanced traceability",
      control_id: controls[63],
    },
    {
      title:
        "We regularly review and update AI systems to maintain regulatory compliance.",
      description:
        "Regular reviews ensure AI systems evolve in line with regulatory changes and industry standards.",
      order_no: 3,
      status: "In progress",
      risk_review: "Unacceptable risk",
      approver: userId1,
      owner: userId2,
      reviewer: userId1,
      due_date: new Date("2024-08-01"),
      implementation_details:
        "Scheduled regular reviews of AI systems for compliance",
      evidence_description: "Review schedules and updated compliance records",
      feedback_description: "Regulatory updates are being tracked and applied",
      control_id: controls[63],
    },
    {
      title:
        "We ensure that any system changes are documented and assessed for compliance.",
      description:
        "Thorough documentation and assessment of changes prevent compliance gaps and support accountability.",
      order_no: 4,
      status: "Done",
      risk_review: "Acceptable risk",
      approver: userId1,
      owner: userId2,
      reviewer: userId1,
      due_date: new Date("2024-06-15"),
      implementation_details:
        "Implemented a compliance review system for AI system changes",
      evidence_description:
        "Change documentation and compliance assessment records",
      feedback_description:
        "All system changes are now fully documented and assessed",
      control_id: controls[63],
    },
    {
      title:
        "We implement processes to capture and integrate unexpected impact inputs.",
      description:
        "Capturing unforeseen impacts helps refine systems and address emerging risks proactively.",
      order_no: 1,
      status: "Done",
      risk_review: "Acceptable risk",
      approver: userId1,
      owner: userId2,
      reviewer: userId1,
      due_date: new Date("2024-06-01"),
      implementation_details:
        "Established a process for capturing unexpected impact data and incorporating it into system updates.",
      evidence_description:
        "Integration of feedback loop into development and deployment phases.",
      feedback_description:
        "Effective identification and integration of unexpected impacts.",
      control_id: controls[64],
    },
    {
      title: "We assess AI model capabilities using appropriate tools.",
      description:
        "Capability assessments verify that AI models perform as intended and meet required safety and quality standards.",
      order_no: 1,
      status: "Done",
      risk_review: "Acceptable risk",
      approver: userId1,
      owner: userId2,
      reviewer: userId1,
      due_date: new Date("2024-06-01"),
      implementation_details:
        "Implemented assessment procedures using AI performance and safety evaluation tools.",
      evidence_description: "Assessment reports and validation checklists.",
      feedback_description:
        "Thorough capability assessments provide confidence in model safety.",
      control_id: controls[65],
    },
    {
      title: "We develop plans to address unexpected risks as they arise.",
      description:
        "Proactive risk plans ensure quick and effective responses to emerging challenges or unforeseen issues.",
      order_no: 1,
      status: "Done",
      risk_review: "Acceptable risk",
      approver: userId1,
      owner: userId2,
      reviewer: userId1,
      due_date: new Date("2024-06-01"),
      implementation_details:
        "Created and deployed risk mitigation strategies for handling unforeseen events.",
      evidence_description:
        "Risk management plans and mitigation strategy documentation.",
      feedback_description:
        "Responsive and adaptive risk management processes.",
      control_id: controls[66],
    },
    {
      title: "We monitor and respond to incidents post-deployment.",
      description:
        "Post-deployment monitoring identifies and mitigates issues, ensuring continued compliance and system reliability.",
      order_no: 2,
      status: "In progress",
      risk_review: "Residual risk",
      approver: userId1,
      owner: userId2,
      reviewer: userId1,
      due_date: new Date("2024-07-01"),
      implementation_details:
        "Active monitoring systems are in place to identify and resolve incidents after deployment.",
      evidence_description:
        "Incident logs, resolution reports, and monitoring system dashboards.",
      feedback_description:
        "Incident response times and resolution efficiency have been improved.",
      control_id: controls[66],
    },
    {
      title:
        "We ensure providers implement systems for capturing and storing AI system logs.",
      description:
        "Logging systems provide traceability, aiding audits and troubleshooting while supporting regulatory requirements.",
      order_no: 1,
      status: "Done",
      risk_review: "Acceptable risk",
      approver: userId1,
      owner: userId2,
      reviewer: userId1,
      due_date: new Date("2024-06-01"),
      implementation_details:
        "Mandated that providers implement robust logging systems for tracking AI operations.",
      evidence_description:
        "Log files, audit trails, and provider system documentation.",
      feedback_description:
        "Logs are comprehensive, aiding system troubleshooting and audits.",
      control_id: controls[67],
    },
    {
      title:
        "We immediately report serious incidents to providers, importers, distributors, and relevant authorities.",
      description:
        "Prompt reporting ensures accountability and timely resolution of incidents, minimizing potential harm.",
      order_no: 1,
      status: "Done",
      risk_review: "Acceptable risk",
      approver: userId1,
      owner: userId2,
      reviewer: userId1,
      due_date: new Date("2024-06-01"),
      implementation_details:
        "Developed an incident reporting protocol that immediately notifies all relevant parties.",
      evidence_description:
        "Incident reports and communication logs with authorities.",
      feedback_description:
        "Efficient and prompt communication during serious incidents.",
      control_id: controls[68],
    },
    {
      title:
        "We implement processes to capture and integrate unexpected impact inputs.",
      description:
        "Capturing unforeseen impacts helps refine systems and address emerging risks proactively.",
      order_no: 1,
      status: "Done",
      risk_review: "Acceptable risk",
      approver: userId1,
      owner: userId2,
      reviewer: userId1,
      due_date: new Date("2024-06-01"),
      implementation_details:
        "Implemented a system to track and assess unexpected impacts based on user feedback and ongoing data analysis.",
      evidence_description: "Impact reports and integration processes",
      feedback_description:
        "Positive feedback from risk management team regarding the process",
      control_id: controls[69],
    },
    {
      title: "We assess AI model capabilities using appropriate tools.",
      description:
        "Capability assessments verify that AI models perform as intended and meet required safety and quality standards.",
      order_no: 1,
      status: "Done",
      risk_review: "Acceptable risk",
      approver: userId1,
      owner: userId2,
      reviewer: userId1,
      due_date: new Date("2024-07-15"),
      implementation_details:
        "Utilized testing frameworks and tools such as ModelValidator to ensure AI models meet the standards.",
      evidence_description: "Assessment reports and tool outputs",
      feedback_description:
        "Satisfactory evaluations from model assessment team",
      control_id: controls[70],
    },
    {
      title: "We develop plans to address unexpected risks as they arise.",
      description:
        "Proactive risk plans ensure quick and effective responses to emerging challenges or unforeseen issues.",
      order_no: 1,
      status: "In progress",
      risk_review: "Residual risk",
      approver: userId1,
      owner: userId2,
      reviewer: userId1,
      due_date: new Date("2024-08-10"),
      implementation_details:
        "Developing risk mitigation plans with predefined action steps based on AI system performance.",
      evidence_description: "Draft risk response plans and simulation results",
      feedback_description: "Awaiting feedback from senior management",
      control_id: controls[71],
    },
    {
      title: "We monitor and respond to incidents post-deployment.",
      description:
        "Post-deployment monitoring identifies and mitigates issues, ensuring continued compliance and system reliability.",
      order_no: 2,
      status: "Done",
      risk_review: "Acceptable risk",
      approver: userId1,
      owner: userId2,
      reviewer: userId1,
      due_date: new Date("2024-06-30"),
      implementation_details:
        "Implemented a continuous monitoring system that tracks key AI performance metrics post-deployment.",
      evidence_description: "Incident logs and resolution reports",
      feedback_description: "No major incidents, ongoing system reliability",
      control_id: controls[71],
    },
    {
      title:
        "We ensure providers implement systems for capturing and storing AI system logs.",
      description:
        "Logging systems provide traceability, aiding audits and troubleshooting while supporting regulatory requirements.",
      order_no: 1,
      status: "In progress",
      risk_review: "Residual risk",
      approver: userId1,
      owner: userId2,
      reviewer: userId1,
      due_date: new Date("2024-09-01"),
      implementation_details:
        "Collaborating with third-party providers to integrate logging systems that comply with industry standards.",
      evidence_description: "Integration plans and log system designs",
      feedback_description:
        "Providers are reviewing final implementation details",
      control_id: controls[72],
    },
    {
      title:
        "We immediately report serious incidents to providers, importers, distributors, and relevant authorities.",
      description:
        "Prompt reporting ensures accountability and timely resolution of incidents, minimizing potential harm.",
      order_no: 1,
      status: "Done",
      risk_review: "Acceptable risk",
      approver: userId1,
      owner: userId2,
      reviewer: userId1,
      due_date: new Date("2024-05-20"),
      implementation_details:
        "Established a reporting protocol with clear guidelines for immediate incident escalation.",
      evidence_description:
        "Incident reports and confirmation receipts from authorities",
      feedback_description:
        "Fast response and resolution for all reported incidents",
      control_id: controls[73],
    },

    {
      title:
        "We ensure executive leadership takes responsibility for decisions related to AI risks",
      description:
        "Leadership is accountable for oversight and strategic decisions regarding AI risks, ensuring alignment with compliance.",
      order_no: 1,
      status: "Done",
      risk_review: "Acceptable risk",
      approver: userId1,
      owner: userId2,
      reviewer: userId1,
      due_date: new Date(new Date("2024-06-01")),
      implementation_details:
        "Established AI oversight committee with executive sponsors",
      evidence_description: "Committee charter and meeting minutes",
      feedback_description: "Positive engagement from leadership team",
      control_id: controls[74],
    },
    {
      title:
        "We provide AI literacy and ethics training to relevant personnel.",
      description:
        "Training equips employees to responsibly manage and understand AI systems, fostering ethics and legal adherence.",
      order_no: 2,
      status: "In progress",
      risk_review: "Residual risk",
      approver: userId1,
      owner: userId2,
      reviewer: userId1,
      due_date: new Date(new Date("2024-07-01")),
      implementation_details: "Developing online training modules",
      evidence_description: "Training curriculum draft",
      feedback_description: "Initial feedback from pilot group",
      control_id: controls[74],
    },
    {
      title:
        "We develop a clear and concise communication plan for informing workers about the use of high-risk AI systems in the workplace.",
      description:
        "A concise plan ensures employees are informed of AI system impacts in their workplace roles and rights.",
      order_no: 3,
      status: "Waiting",
      risk_review: "Unacceptable risk",
      approver: userId1,
      owner: userId2,
      reviewer: userId1,
      due_date: new Date(new Date("2024-07-30")),
      implementation_details: "Communication plan under development",
      control_id: controls[74],
    },
    {
      title:
        "We clearly define roles and responsibilities related to AI risk management.",
      description:
        "Roles and responsibilities streamline risk management and assign clear accountability for compliance efforts.",
      order_no: 1,
      status: "Waiting",
      risk_review: "Residual risk",
      approver: userId1,
      owner: userId2,
      reviewer: userId1,
      due_date: new Date(new Date("2024-08-01")),
      implementation_details: "Drafting role definitions",
      control_id: controls[75],
    },
    {
      title:
        "We train personnel on the requirements of the regulation and the process for responding to requests from competent authorities.",
      description:
        "Personnel training ensures efficient regulatory responses and familiarity with legal requirements for AI systems.",
      order_no: 2,
      status: "Waiting",
      risk_review: "Residual risk",
      approver: userId1,
      owner: userId2,
      reviewer: userId1,
      due_date: new Date(new Date("2024-08-15")),
      implementation_details: "Preparing training materials",
      control_id: controls[75],
    },
    {
      order_no: 1,
      title:
        "We provide detailed descriptions of the AI system''s intended use.",
      description:
        "Describing intended use prevents misuse, aligning AI deployment with specified legal and ethical boundaries.",
      status: "In progress",
      risk_review: "Acceptable risk",
      approver: userId1,
      owner: userId2,
      reviewer: userId1,
      due_date: new Date(new Date("2024-07-01")),
      implementation_details: "Drafting intended use documentation",
      control_id: controls[76],
    },
    {
      order_no: 1,
      title: "We review and verify technical documentation from providers.",
      description:
        "Reviewing documentation confirms provider accuracy and ensures adherence to standards and compliance needs.",
      status: "Waiting",
      risk_review: "Unacceptable risk",
      approver: userId1,
      owner: userId2,
      reviewer: userId1,
      due_date: new Date(new Date("2024-07-15")),
      implementation_details: "Collecting technical documentation",
      control_id: controls[77],
    },
    {
      order_no: 1,
      title:
        "We maintain accurate records of all AI system activities, including modifications and third-party involvements.",
      description:
        "Accurate records enhance traceability, support audits, and provide accountability for AI system activities.",
      status: "Done",
      risk_review: "Unacceptable risk",
      approver: userId1,
      owner: userId2,
      reviewer: userId1,
      due_date: new Date(new Date("2024-06-20")),
      implementation_details: "Updating record-keeping policies",
      control_id: controls[78],
    },
    {
      order_no: 1,
      title:
        "We document system information, including functionality, limitations, and risk controls.",
      description:
        "System documentation clarifies operations, limitations, and controls, aiding informed decision-making and safety.",
      status: "In progress",
      risk_review: "Acceptable risk",
      approver: userId1,
      owner: userId2,
      reviewer: userId1,
      due_date: new Date("2024-08-01"),
      implementation_details: "Compiling system documentation",
      control_id: controls[79],
    },
    {
      order_no: 2,
      title:
        "We define and document forbidden uses and foresee potential misuse.",
      description:
        "Defining forbidden uses helps anticipate misuse and mitigate risks proactively for safe AI applications.",
      status: "Waiting",
      risk_review: "Residual risk",
      approver: userId1,
      owner: userId2,
      reviewer: userId1,
      due_date: new Date("2024-08-15"),
      implementation_details: "Preparing forbidden use cases",
      control_id: controls[79],
    },
    {
      order_no: 1,
      title: "We describe training, validation, and testing datasets used.",
      description:
        "Dataset descriptions provide transparency in training, validation, and testing, ensuring alignment with standards.",
      status: "In progress",
      risk_review: "Unacceptable risk",
      approver: userId1,
      owner: userId2,
      reviewer: userId1,
      due_date: new Date("2024-07-10"),
      implementation_details: "Compiling dataset documentation",
      control_id: controls[80],
    },
    {
      order_no: 1,
      title: "We explain mitigation strategies and bias testing results.",
      description:
        "Explaining bias testing and mitigation highlights fairness measures and prevents harmful or unethical outcomes.",
      status: "Done",
      risk_review: "Acceptable risk",
      approver: userId1,
      owner: userId2,
      reviewer: userId1,
      due_date: new Date("2024-06-30"),
      implementation_details: "Finalizing bias analysis report",
      control_id: controls[81],
    },
    {
      order_no: 1,
      title:
        "We provide accuracy metrics, robustness, and cybersecurity information.",
      description:
        "Providing metrics ensures systems meet robustness and security criteria while fostering trust through transparency.",
      status: "In progress",
      risk_review: "Residual risk",
      approver: userId1,
      owner: userId2,
      reviewer: userId1,
      due_date: new Date("2024-08-05"),
      implementation_details: "Gathering performance metrics",
      control_id: controls[82],
    },
    {
      order_no: 1,
      title:
        "We define mechanisms for human intervention or override of AI outputs.",
      description:
        "Human intervention mechanisms ensure appropriate oversight, preventing harmful or unintended AI outcomes.",
      status: "Waiting",
      risk_review: "Residual risk",
      approver: userId1,
      owner: userId2,
      reviewer: userId1,
      due_date: new Date("2024-07-01"),
      implementation_details: "Designing intervention frameworks",
      control_id: controls[83],
    },
    {
      order_no: 2,
      title:
        "We assign competent individuals with authority to oversee AI system usage.",
      description:
        "Competent oversight personnel are essential for monitoring and ensuring safe and lawful AI usage.",
      status: "In progress",
      risk_review: "Acceptable risk",
      approver: userId1,
      owner: userId2,
      reviewer: userId1,
      due_date: new Date("2024-07-15"),
      implementation_details: "Selecting oversight personnel",
      control_id: controls[83],
    },
    {
      order_no: 3,
      title:
        "We align oversight measures with provider''s instructions for use.",
      description:
        "Aligning measures with provider instructions ensures system use remains within intended boundaries and purposes.",
      status: "Waiting",
      risk_review: "Unacceptable risk",
      approver: userId1,
      owner: userId2,
      reviewer: userId1,
      due_date: new Date("2024-08-01"),
      implementation_details: "Reviewing provider guidelines",
      control_id: controls[83],
    },
    {
      order_no: 1,
      title: "We document system limitations and human oversight options.",
      description:
        "Documentation ensures clarity on system boundaries and how human operators can intervene if needed.",
      status: "Done",
      risk_review: "Acceptable risk",
      approver: userId1,
      owner: userId2,
      reviewer: userId1,
      due_date: new Date("2024-06-15"),
      implementation_details: "Creating oversight documentation",
      control_id: controls[84],
    },
    {
      order_no: 2,
      title: "We establish appeal processes related to AI system decisions.",
      description:
        "Appeals processes provide a structured method for addressing disputes or adverse outcomes from AI system decisions.",
      status: "In progress",
      risk_review: "Residual risk",
      approver: userId1,
      owner: userId2,
      reviewer: userId1,
      due_date: new Date("2024-07-10"),
      implementation_details: "Developing appeal workflows",
      control_id: controls[84],
    },
    {
      order_no: 1,
      title:
        "We ensure clear communication of AI system capabilities, limitations, and risks to human operators.",
      description:
        "Clear communication helps operators understand the system’s scope and manage risks effectively.",
      status: "Waiting",
      risk_review: "Unacceptable risk",
      approver: userId1,
      owner: userId2,
      reviewer: userId1,
      due_date: new Date("2024-09-01"),
      implementation_details: "Drafting user communication materials",
      control_id: controls[85],
    },
    {
      order_no: 2,
      title:
        "We proportion oversight measures to match AI system''s risk level and autonomy.",
      description:
        "Oversight measures are scaled appropriately to reflect the system''s complexity, risk, and decision-making autonomy.",
      status: "In progress",
      risk_review: "Residual risk",
      approver: userId1,
      owner: userId2,
      reviewer: userId1,
      due_date: new Date("2024-08-20"),
      implementation_details: "Evaluating risk-based oversight",
      control_id: controls[85],
    },
    {
      order_no: 1,
      title:
        "We consult with diverse experts and end-users to inform corrective measures.",
      description:
        "Consulting experts and end-users ensures corrective measures are comprehensive and address real-world implications.",
      status: "In progress",
      risk_review: "Acceptable risk",
      approver: userId1,
      owner: userId2,
      reviewer: userId1,
      due_date: new Date("2024-07-10"),
      implementation_details: "Engaging stakeholders for feedback",
      control_id: controls[86],
    },
    {
      order_no: 1,
      title:
        "We validate and document system reliability and standards compliance.",
      description:
        "Validation and documentation demonstrate that systems operate reliably and meet required compliance standards.",
      status: "Done",
      risk_review: "Residual risk",
      approver: userId1,
      owner: userId2,
      reviewer: userId1,
      due_date: new Date("2024-06-20"),
      implementation_details: "Reviewing documentation and validation reports",
      control_id: controls[87],
    },
    {
      order_no: 2,
      title:
        "We sustain AI system value post-deployment through continuous improvements.",
      description:
        "Continuous improvements ensure AI systems remain effective, compliant, and aligned with user needs after deployment.",
      status: "Waiting",
      risk_review: "Unacceptable risk",
      approver: userId1,
      owner: userId2,
      reviewer: userId1,
      due_date: new Date("2024-09-01"),
      implementation_details: "Developing enhancement roadmap",
      control_id: controls[87],
    },
    {
      order_no: 1,
      title:
        "We implement corrective actions as required by Article 20 to address identified risks or issues.",
      description:
        "Prompt corrective actions address risks to maintain compliance and prevent harm resulting from system flaws.",
      status: "In progress",
      risk_review: "Acceptable risk",
      approver: userId1,
      owner: userId2,
      reviewer: userId1,
      due_date: new Date("2024-07-30"),
      implementation_details: "Executing remediation plan",
      control_id: controls[88],
    },
    {
      order_no: 2,
      title:
        "We ensure mechanisms are in place to withdraw, disable, or recall non-conforming AI systems.",
      description:
        "Effective mechanisms ensure non-conforming systems can be removed or disabled to prevent further risks.",
      status: "Waiting",
      risk_review: "Residual risk",
      approver: userId1,
      owner: userId2,
      reviewer: userId1,
      due_date: new Date("2024-08-10"),
      implementation_details: "Establishing system recall protocols",
      control_id: controls[88],
    },
    {
      order_no: 1,
      title: "We maintain documentation of corrective actions taken.",
      description:
        "Detailed records of corrective actions provide accountability and support audits or regulatory reviews.",
      status: "Done",
      risk_review: "Acceptable risk",
      approver: userId1,
      owner: userId2,
      reviewer: userId1,
      due_date: new Date("2024-05-25"),
      implementation_details: "Compiling compliance reports",
      control_id: controls[89],
    },
    {
      order_no: 1,
      title:
        "We conduct thorough due diligence before associating with high-risk AI systems.",
      description:
        "Comprehensive due diligence ensures third-party AI systems meet legal and ethical standards before adoption.",
      status: "Waiting",
      risk_review: "Residual risk",
      approver: userId1,
      owner: userId2,
      reviewer: userId1,
      due_date: new Date("2024-07-01"),
      implementation_details: "Reviewing third-party compliance reports",
      control_id: controls[90],
    },
    {
      order_no: 1,
      title:
        "We establish clear contractual agreements with AI system providers.",
      description:
        "Contracts define obligations and responsibilities, ensuring all parties comply with AI-related requirements.",
      status: "In progress",
      risk_review: "Acceptable risk",
      approver: userId1,
      owner: userId2,
      reviewer: userId1,
      due_date: new Date("2024-07-15"),
      implementation_details: "Drafting legal contract templates",
      control_id: controls[91],
    },
    {
      order_no: 1,
      title:
        "We define responsibilities in agreements with third-party suppliers of AI components.",
      description:
        "Specifying roles and responsibilities prevents gaps in accountability and ensures compliance along the AI supply chain.",
      status: "Done",
      risk_review: "Acceptable risk",
      approver: userId1,
      owner: userId2,
      reviewer: userId1,
      due_date: new Date("2024-06-30"),
      implementation_details: "Finalizing agreement templates",
      control_id: controls[92],
    },
    {
      order_no: 1,
      title:
        "We specify information, technical access, and support required for regulatory compliance.",
      description:
        "Clear specifications for information and support ensure smooth regulatory processes and timely compliance responses.",
      status: "Waiting",
      risk_review: "Unacceptable risk",
      approver: userId1,
      owner: userId2,
      reviewer: userId1,
      due_date: new Date("2024-08-10"),
      implementation_details: "Creating technical access requirements document",
      control_id: controls[93],
    },
    {
      order_no: 1,
      title:
        "We ensure third-party impacts, such as IP infringement, meet organizational standards.",
      description:
        "Third-party compliance with organizational standards prevents risks like intellectual property violations.",
      status: "In progress",
      risk_review: "Residual risk",
      approver: userId1,
      owner: userId2,
      reviewer: userId1,
      due_date: new Date("2024-08-20"),
      implementation_details: "Auditing third-party licensing agreements",
      control_id: controls[94],
    },
    {
      order_no: 1,
      title:
        "We maintain mechanisms to deactivate AI systems if performance deviates from intended use.",
      description:
        "Deactivation mechanisms ensure systems can be stopped to mitigate risks if they perform outside intended parameters.",
      status: "Waiting",
      risk_review: "Unacceptable risk",
      approver: userId1,
      owner: userId2,
      reviewer: userId1,
      due_date: new Date("2024-09-01"),
      implementation_details: "Developing shutdown protocols",
      control_id: controls[95],
    },
    {
      order_no: 1,
      title:
        "We monitor and respond to incidents involving third-party components.",
      description:
        "Monitoring ensures timely detection and resolution of issues with third-party AI components to maintain compliance.",
      status: "In progress",
      risk_review: "Residual risk",
      approver: userId1,
      owner: userId2,
      reviewer: userId1,
      due_date: new Date("2024-07-25"),
      implementation_details: "Implementing incident response framework",
      control_id: controls[96],
    },
    {
      order_no: 1,
      title:
        "We implement measures to enhance AI system resilience against errors and faults.",
      description:
        "Validation and documentation demonstrate that systems operate reliably and meet required compliance standards.",
      status: "Done",
      risk_review: "Acceptable risk",
      approver: userId1,
      owner: userId2,
      reviewer: userId1,
      due_date: new Date("2024-06-15"),
      implementation_details: "Testing and validating AI systems",
      control_id: controls[97],
    },
    {
      order_no: 1,
      title:
        "We identify and assess potential non-conformities with regulations.",
      description:
        "Identifying non-conformities proactively reduces regulatory risks and ensures continued compliance.",
      status: "Waiting",
      risk_review: "Unacceptable risk",
      approver: userId1,
      owner: userId2,
      reviewer: userId1,
      due_date: new Date("2024-09-10"),
      implementation_details: "Conducting compliance audits",
      control_id: controls[98],
    },
    {
      title:
        "We document roles, responsibilities, and communication lines for AI risk management.",
      description:
        "Clear documentation streamlines accountability and coordination in managing AI-related risks.",
      order_no: 1,
      status: "In progress",
      risk_review: "Residual risk",
      approver: userId1,
      owner: userId2,
      reviewer: userId1,
      due_date: new Date("2024-07-01"),
      implementation_details:
        "Created a detailed AI risk management framework.",
      evidence_description: "Framework document and stakeholder sign-off.",
      feedback_description: "Need additional details on communication flow.",
      control_id: controls[99],
    },
    {
      title: "We develop policies and guidelines for AI Act compliance.",
      description:
        "Policies and guidelines provide a structured framework for meeting AI Act requirements across the organization.",
      order_no: 2,
      status: "Waiting",
      risk_review: "Unacceptable risk",
      approver: userId1,
      owner: userId2,
      reviewer: userId1,
      due_date: new Date("2024-08-01"),
      implementation_details: "Initial draft created, pending review.",
      evidence_description: "Draft document shared with stakeholders.",
      feedback_description: "Requires additional legal input.",
      control_id: controls[99],
    },
    {
      title:
        "We plan responses to AI system risks, including defining risk tolerance and mitigation strategies.",
      description:
        "Risk response plans prepare organizations to manage and mitigate AI-related risks effectively and within acceptable limits.",
      order_no: 1,
      status: "Done",
      risk_review: "Acceptable risk",
      approver: userId1,
      owner: userId2,
      reviewer: userId1,
      due_date: new Date("2024-06-15"),
      implementation_details: "Developed a detailed AI risk response matrix.",
      evidence_description: "Risk response strategy document.",
      feedback_description: "Well-defined and structured approach.",
      control_id: controls[100],
    },
    {
      title:
        "We implement technical and organizational measures to adhere to AI system instructions for use.",
      description:
        "These measures ensure systems operate within their intended scope and comply with provided instructions.",
      order_no: 1,
      status: "In progress",
      risk_review: "Residual risk",
      approver: userId1,
      owner: userId2,
      reviewer: userId1,
      due_date: new Date("2024-07-10"),
      implementation_details: "Defined technical compliance measures.",
      evidence_description: "Compliance checklist and test results.",
      feedback_description: "Some areas need more rigorous validation.",
      control_id: controls[101],
    },
    {
      title:
        "We regularly evaluate safety, transparency, accountability, security, and resilience of AI systems.",
      description:
        "Regular evaluations help maintain system integrity and alignment with evolving regulatory and operational standards.",
      order_no: 2,
      status: "Waiting",
      risk_review: "Unacceptable risk",
      approver: userId1,
      owner: userId2,
      reviewer: userId1,
      due_date: new Date("2024-09-01"),
      implementation_details: "Scheduled bi-annual AI system evaluations.",
      evidence_description: "Evaluation framework and initial assessment.",
      feedback_description: "Needs more emphasis on security measures.",
      control_id: controls[101],
    },
    {
      order_no: 1,
      title:
        "We conduct thorough legal reviews relevant to AI system deployment.",
      description:
        "Legal reviews ensure AI systems comply with all applicable laws, minimizing regulatory and legal risks.",
      status: "In progress",
      risk_review: "Residual risk",
      approver: userId1,
      owner: userId2,
      reviewer: userId1,
      due_date: new Date("2024-06-15"),
      implementation_details:
        "Established a legal compliance framework for AI deployment",
      evidence_description:
        "Legal assessment reports and compliance checklists",
      feedback_description: "Needs further alignment with regional laws",
      control_id: controls[102],
    },
    {
      order_no: 2,
      title:
        "We prioritize risk responses based on impact, likelihood, and resources.",
      description:
        "Prioritizing risks helps allocate resources effectively and address the most critical threats first.",
      status: "Waiting",
      risk_review: "Unacceptable risk",
      approver: userId1,
      owner: userId2,
      reviewer: userId1,
      due_date: new Date("2024-07-01"),
      implementation_details: "Risk prioritization framework implemented",
      evidence_description: "Risk assessment reports",
      feedback_description:
        "Consider further refinement of prioritization criteria",
      control_id: controls[102],
    },
    {
      order_no: 3,
      title: "We identify residual risks to users and stakeholders.",
      description:
        "Identifying residual risks ensures informed decisions about mitigation and system deployment.",
      status: "Done",
      risk_review: "Acceptable risk",
      approver: userId1,
      owner: userId2,
      reviewer: userId1,
      due_date: new Date("2024-05-20"),
      implementation_details: "Residual risk analysis completed",
      evidence_description: "Residual risk documentation and impact analysis",
      feedback_description: "Well documented, minor clarifications required",
      control_id: controls[102],
    },
    {
      order_no: 4,
      title:
        "We evaluate if AI systems meet objectives and decide on deployment continuation.",
      description:
        "Regular evaluations verify that systems are achieving their goals and remain suitable for continued use.",
      status: "In progress",
      risk_review: "Residual risk",
      approver: userId1,
      owner: userId2,
      reviewer: userId1,
      due_date: new Date("2024-08-10"),
      implementation_details: "Periodic evaluation process established",
      evidence_description: "Evaluation reports and performance metrics",
      feedback_description: "Consider more frequent assessments",
      control_id: controls[102],
    },
    {
      order_no: 5,
      title: "We implement cybersecurity controls to protect AI models.",
      description:
        "Robust cybersecurity measures safeguard AI systems from breaches, tampering, and malicious exploitation.",
      status: "Waiting",
      risk_review: "Unacceptable risk",
      approver: userId1,
      owner: userId2,
      reviewer: userId1,
      due_date: new Date("2024-09-01"),
      implementation_details: "Cybersecurity protocols defined and enforced",
      evidence_description:
        "Security audit reports and vulnerability assessments",
      feedback_description: "Further penetration testing recommended",
      control_id: controls[102],
    },
    {
      order_no: 6,
      title:
        "We document system risk controls, including third-party components.",
      description:
        "Comprehensive documentation of risk controls ensures accountability and supports audits or compliance checks.",
      status: "Done",
      risk_review: "Acceptable risk",
      approver: userId1,
      owner: userId2,
      reviewer: userId1,
      due_date: new Date("2024-04-30"),
      implementation_details: "Detailed risk control documentation finalized",
      evidence_description:
        "Risk control register and third-party risk assessments",
      feedback_description: "Comprehensive documentation, well received",
      control_id: controls[102],
    },
    {
      title:
        "We regularly update compliance measures based on system or regulatory changes.",
      description:
        "Ongoing updates ensure compliance measures remain aligned with evolving technologies and legal requirements.",
      order_no: 1,
      status: "In progress",
      risk_review: "Residual risk",
      approver: userId1,
      owner: userId2,
      reviewer: userId1,
      due_date: new Date("2024-06-15"),
      implementation_details: "Scheduled quarterly compliance review meetings.",
      evidence_description: "Meeting notes and compliance updates.",
      feedback_description: "Stakeholders requested additional legal insights.",
      control_id: controls[103],
    },
    {
      title:
        "We explain AI models to ensure responsible use and maintain an AI systems repository.",
      description:
        "Clear explanations of AI models support transparency and facilitate responsible usage across stakeholders.",
      order_no: 2,
      status: "Waiting",
      risk_review: "Acceptable risk",
      approver: userId1,
      owner: userId2,
      reviewer: userId1,
      due_date: new Date("2024-07-01"),
      implementation_details: "Created documentation template for AI models.",
      evidence_description:
        "Drafted model explanations and repository structure.",
      feedback_description: "Awaiting feedback from technical teams.",
      control_id: controls[104],
    },
    {
      title:
        "We maintain and update technical documentation reflecting system changes.",
      description:
        "Up-to-date documentation ensures accurate representation of system functionalities and compliance status.",
      order_no: 3,
      status: "Done",
      risk_review: "Acceptable risk",
      approver: userId1,
      owner: userId2,
      reviewer: userId1,
      due_date: new Date("2024-05-20"),
      implementation_details:
        "Updated API documentation to reflect recent system updates.",
      evidence_description: "Versioned documentation repository and changelog.",
      feedback_description: "Positive feedback from developers and auditors.",
      control_id: controls[105],
    },
    {
      title: "We assess input data relevance and representativeness.",
      description:
        "Data assessments ensure that AI inputs are appropriate, unbiased, and aligned with the intended purpose.",
      order_no: 4,
      status: "In progress",
      risk_review: "Residual risk",
      approver: userId1,
      owner: userId2,
      reviewer: userId1,
      due_date: new Date("2024-06-30"),
      implementation_details:
        "Conducted initial bias analysis on training datasets.",
      evidence_description: "Bias assessment report and dataset statistics.",
      feedback_description:
        "Further refinement suggested for demographic representation.",
      control_id: controls[106],
    },
    {
      title:
        "We implement automatic logging of AI system operations and retain logs appropriately.",
      description:
        "Automatic logging ensures traceability of system activities, aiding in audits, troubleshooting, and compliance.",
      order_no: 5,
      status: "Waiting",
      risk_review: "Unacceptable risk",
      approver: userId1,
      owner: userId2,
      reviewer: userId1,
      due_date: new Date("2024-08-01"),
      implementation_details:
        "Designed logging framework and retention policy.",
      evidence_description: "System logs and retention policy document.",
      feedback_description: "Pending security team approval.",
      control_id: controls[107],
    },
    {
      title:
        "We develop a comprehensive process for fundamental rights impact assessments.",
      description:
        "A structured assessment process identifies and mitigates risks to fundamental rights posed by AI systems.",
      order_no: 1,
      status: "In progress",
      risk_review: "Residual risk",
      approver: userId1,
      owner: userId2,
      reviewer: userId1,
      due_date: new Date("2024-07-15"),
      implementation_details: "Initiating workshops for impact assessment",
      evidence_description:
        "Initial draft of fundamental rights assessment template",
      feedback_description: "Team is working on finalizing assessment steps",
      control_id: controls[108],
    },
    {
      title:
        "We describe deployer processes for using high-risk AI systems, outlining intended purposes.",
      description:
        "Detailed process descriptions ensure transparency in how high-risk systems are deployed and their intended use cases.",
      order_no: 1,
      status: "Waiting",
      risk_review: "Unacceptable risk",
      approver: userId1,
      owner: userId2,
      reviewer: userId1,
      due_date: new Date("2024-08-01"),
      implementation_details:
        "Defining standard operating procedures for AI deployers",
      evidence_description:
        "SOPs document outlining high-risk AI system processes",
      feedback_description: "Pending review of deployer processes",
      control_id: controls[109],
    },
    {
      title:
        "Identify all natural persons and groups potentially affected by AI system usage.",
      description:
        "Identifying impacted individuals and groups helps address potential risks and design systems responsibly.",
      order_no: 1,
      status: "Done",
      risk_review: "Acceptable risk",
      approver: userId1,
      owner: userId2,
      reviewer: userId1,
      due_date: new Date("2024-06-30"),
      implementation_details:
        "Conducted stakeholder mapping and impact assessment",
      evidence_description:
        "List of affected individuals and groups with impact assessments",
      feedback_description:
        "Clear identification of stakeholders and impacted groups",
      control_id: controls[110],
    },
    {
      title:
        "We assess data used by AI systems based on legal definitions (e.g., GDPR Article 3 (32)).",
      description:
        "Data assessments ensure compliance with legal frameworks and support ethical use of personal data in AI systems.",
      order_no: 1,
      status: "In progress",
      risk_review: "Residual risk",
      approver: userId1,
      owner: userId2,
      reviewer: userId1,
      due_date: new Date("2024-09-10"),
      implementation_details: "Reviewing all data types in use for compliance",
      evidence_description: "Data classification and compliance checklist",
      feedback_description: "Initial data review completed, ongoing assessment",
      control_id: controls[111],
    },
    {
      title:
        "We create and periodically re-evaluate strategies for measuring AI system impacts.",
      description:
        "Re-evaluating strategies ensures continued relevance and effectiveness in managing AI system impacts.",
      order_no: 1,
      status: "Waiting",
      risk_review: "Unacceptable risk",
      approver: userId1,
      owner: userId2,
      reviewer: userId1,
      due_date: new Date("2024-10-01"),
      implementation_details: "Setting up strategy evaluation workshops",
      evidence_description:
        "Strategy review meeting notes and evaluation criteria",
      feedback_description: "Awaiting approval of re-evaluation plan",
      control_id: controls[112],
    },
    {
      title:
        "We regularly evaluate bias, fairness, privacy, and environmental issues related to AI systems.",
      description:
        "Regular evaluations help ensure AI systems are ethical, equitable, and environmentally sustainable.",
      order_no: 1,
      status: "In progress",
      risk_review: "Residual risk",
      approver: userId1,
      owner: userId2,
      reviewer: userId1,
      due_date: new Date("2024-09-15"),
      implementation_details:
        "Conducted quarterly bias and fairness assessments",
      evidence_description: "Bias audit reports and privacy assessments",
      feedback_description: "Evaluation reports submitted for review",
      control_id: controls[113],
    },
    {
      title:
        "We document known or foreseeable risks to health, safety, or fundamental rights.",
      description:
        "Documenting risks provides transparency and helps stakeholders make informed decisions regarding system deployment.",
      order_no: 1,
      status: "Waiting",
      risk_review: "Unacceptable risk",
      approver: userId1,
      owner: userId2,
      reviewer: userId1,
      due_date: new Date("2024-07-10"),
      implementation_details:
        "Created a risk registry with identified health and safety risks",
      evidence_description: "Risk assessment documentation and risk register",
      feedback_description: "Pending feedback from health and safety team",
      control_id: controls[114],
    },
    {
      title:
        "We maintain assessment documentation, including dates, results, and actions taken.",
      description:
        "Detailed assessment records ensure accountability and facilitate compliance reviews or audits.",
      order_no: 1,
      status: "Done",
      risk_review: "Acceptable risk",
      approver: userId1,
      owner: userId2,
      reviewer: userId1,
      due_date: new Date("2024-05-30"),
      implementation_details:
        "Documented assessment outcomes and actions taken",
      evidence_description: "Assessment reports with audit trail",
      feedback_description: "All documentation has been reviewed and finalized",
      control_id: controls[115],
    },
    {
      title:
        "We integrate fundamental rights impact assessments with existing data protection assessments.",
      description:
        "Combining assessments provides a holistic view of risks and ensures consistency across regulatory compliance efforts.",
      order_no: 1,
      status: "In progress",
      risk_review: "Residual risk",
      approver: userId1,
      owner: userId2,
      reviewer: userId1,
      due_date: new Date("2024-08-20"),
      implementation_details:
        "Integrated fundamental rights considerations into data protection reviews",
      evidence_description: "Integrated assessment reports and impact analyses",
      feedback_description: "Awaiting feedback from legal team",
      control_id: controls[116],
    },
    {
      title:
        "We specify input data and details about training, validation, and testing datasets.",
      description:
        "Clear documentation of datasets ensures transparency and supports validation of AI system performance.",
      order_no: 1,
      status: "Done",
      risk_review: "Acceptable risk",
      approver: userId1,
      owner: userId2,
      reviewer: userId1,
      due_date: new Date("2024-04-25"),
      implementation_details:
        "Documented and published training and testing datasets",
      evidence_description: "Dataset documentation and validation results",
      feedback_description: "Completed dataset review with no further issues",
      control_id: controls[117],
    },
    {
      title: "We ensure representative evaluations when using human subjects.",
      description:
        "Representative evaluations protect fairness and ensure that findings are applicable across relevant user groups.",
      order_no: 2,
      status: "In progress",
      risk_review: "Unacceptable risk",
      approver: userId1,
      owner: userId2,
      reviewer: userId1,
      due_date: new Date("2024-11-05"),
      implementation_details:
        "Initiated recruitment for representative sample evaluations",
      evidence_description: "Evaluation reports and participant demographics",
      feedback_description: "Participant recruitment in progress",
      control_id: controls[117],
    },
    {
      order_no: 1,
      title:
        "We design AI systems to clearly indicate user interaction with AI.",
      description:
        "Clear indicators help users understand when they are interacting with AI, promoting transparency and trust.",
      status: "In progress",
      risk_review: "Residual risk",
      approver: userId1,
      owner: userId2,
      reviewer: userId1,
      due_date: new Date("2025-05-01"),
      implementation_details:
        "Indicators will be displayed at key touchpoints of the user journey.",
      evidence_description:
        "Mockup of system interface with AI indicator is available.",
      feedback_description: "Awaiting user feedback on interface design.",
      control_id: controls[118],
    },
    {
      order_no: 1,
      title: "We inform users when they are subject to AI system usage.",
      description:
        "Transparent communication ensures users are aware of and consent to AI system interactions affecting them.",
      status: "Done",
      risk_review: "Acceptable risk",
      approver: userId1,
      owner: userId2,
      reviewer: userId1,
      due_date: new Date("2025-03-15"),
      implementation_details:
        "Notifications will be sent to users before AI interaction.",
      evidence_description:
        "Email template and pop-up notification scripts are prepared.",
      feedback_description: "Positive feedback from initial user testing.",
      control_id: controls[119],
    },
    {
      order_no: 2,
      title:
        "We ensure AI indications are clear and understandable for reasonably informed users.",
      description:
        "Providing clear, simple AI indications allows users to make informed decisions and understand system limitations.",
      status: "Waiting",
      risk_review: "Unacceptable risk",
      approver: userId1,
      owner: userId2,
      reviewer: userId1,
      due_date: new Date("2025-06-10"),
      implementation_details:
        "AI indications will use simple language and accessible design.",
      evidence_description: "Preliminary design outlines available.",
      feedback_description: "No feedback yet.",
      control_id: controls[119],
    },
    {
      order_no: 1,
      title:
        "We define and document AI system scope, goals, methods, and potential impacts.",
      description:
        "Comprehensive documentation helps align AI deployment with intended goals and prepares for potential risks.",
      status: "In progress",
      risk_review: "Residual risk",
      approver: userId1,
      owner: userId2,
      reviewer: userId1,
      due_date: new Date("2025-07-01"),
      implementation_details:
        "System documentation is being drafted, with input from cross-functional teams.",
      evidence_description: "Draft document available for review.",
      feedback_description:
        "Feedback from technical team is being incorporated.",
      control_id: controls[120],
    },
    {
      order_no: 1,
      title:
        "We maintain accurate records of AI system activities, modifications, and third-party involvements.",
      description:
        "Accurate records ensure accountability and support audits, troubleshooting, and regulatory compliance.",
      status: "Done",
      risk_review: "Acceptable risk",
      approver: userId1,
      owner: userId2,
      reviewer: userId1,
      due_date: new Date("2025-02-28"),
      implementation_details:
        "Records are stored in a secure, centralized repository.",
      evidence_description: "System log files and change history available.",
      feedback_description: "Audit passed with no issues.",
      control_id: controls[121],
    },
    {
      title: "We complete the relevant conformity assessment procedures.",
      description:
        "Completing assessments ensures that AI systems meet required safety and compliance standards before deployment.",
      order_no: 1,
      status: "Done",
      risk_review: "Acceptable risk",
      approver: userId1,
      owner: userId2,
      reviewer: userId1,
      due_date: new Date("2024-06-01"),
      implementation_details:
        "AI systems were assessed for safety and compliance.",
      evidence_description: "Conformity assessment reports and certifications.",
      feedback_description: "All assessments met compliance standards.",
      control_id: controls[122],
    },
    {
      title:
        "We verify that high-risk AI systems have the required CE marking.",
      description:
        "CE marking confirms that high-risk AI systems meet EU regulatory requirements, ensuring safety and compliance.",
      order_no: 2,
      status: "In progress",
      risk_review: "Residual risk",
      approver: userId1,
      owner: userId2,
      reviewer: userId1,
      due_date: new Date("2024-07-15"),
      implementation_details: "Verification of CE marking for AI systems.",
      evidence_description: "Documentation of CE marking verification.",
      feedback_description: "Verification process underway.",
      control_id: controls[122],
    },
    {
      title:
        "We ensure AI systems are registered in the EU database per Article 71.",
      description:
        "Registering systems ensures compliance with EU AI Act requirements and facilitates monitoring and transparency.",
      order_no: 1,
      status: "Done",
      risk_review: "Acceptable risk",
      approver: userId1,
      owner: userId2,
      reviewer: userId1,
      due_date: new Date("2024-05-01"),
      implementation_details: "All AI systems registered in the EU database.",
      evidence_description: "Registration confirmations from the EU database.",
      feedback_description: "Successful registration and database update.",
      control_id: controls[123],
    },
    {
      title:
        "We identify necessary technical standards and certifications for AI systems.",
      description:
        "Identifying relevant standards ensures systems are developed and deployed in compliance with industry and legal requirements.",
      order_no: 1,
      status: "In progress",
      risk_review: "Residual risk",
      approver: userId1,
      owner: userId2,
      reviewer: userId1,
      due_date: new Date("2024-08-01"),
      implementation_details: "Technical standards for AI systems identified.",
      evidence_description:
        "List of required technical certifications and standards.",
      feedback_description: "Standards identification in progress.",
      control_id: controls[124],
    },
    {
      title:
        "We comply with common specifications established by the Commission.",
      description:
        "Adhering to common specifications ensures systems meet regulatory benchmarks for safety, reliability, and performance.",
      order_no: 1,
      status: "Done",
      risk_review: "Acceptable risk",
      approver: userId1,
      owner: userId2,
      reviewer: userId1,
      due_date: new Date("2024-06-15"),
      implementation_details:
        "Compliance with Commission-established specifications confirmed.",
      evidence_description: "Compliance reports and certification.",
      feedback_description: "System compliance confirmed and documented.",
      control_id: controls[125],
    },
    {
      title: "We keep records of all registration activities and updates.",
      description:
        "Maintaining detailed records supports transparency, accountability, and regulatory compliance during system registration.",
      order_no: 1,
      status: "Done",
      risk_review: "Acceptable risk",
      approver: userId1,
      owner: userId2,
      reviewer: userId1,
      due_date: new Date("2024-09-01"),
      implementation_details:
        "Comprehensive records maintained for all registration updates.",
      evidence_description: "Records of registration activities and updates.",
      feedback_description: "Records management is complete and up-to-date.",
      control_id: controls[126],
    },
    {
      title: "Ensure timely and accurate data entry into the EU database.",
      description:
        "Accurate and timely data entry ensures compliance with regulatory requirements and keeps the database current.",
      order_no: 1,
      status: "In progress",
      risk_review: "Residual risk",
      approver: userId1,
      owner: userId2,
      reviewer: userId1,
      due_date: new Date("2024-10-01"),
      implementation_details:
        "Timely data entry into the EU database is being ensured.",
      evidence_description: "Data entry logs and database updates.",
      feedback_description: "Data entry is ongoing with minimal issues.",
      control_id: controls[127],
    },
    {
      title:
        "We maintain up-to-date registration information and comprehensive conformity documentation.",
      description:
        "Keeping documentation updated ensures alignment with changes in regulations and system configurations.",
      order_no: 1,
      status: "Done",
      risk_review: "Acceptable risk",
      approver: userId1,
      owner: userId2,
      reviewer: userId1,
      due_date: new Date("2024-06-30"),
      implementation_details:
        "All registration information and conformity documentation updated.",
      evidence_description:
        "Updated documentation and conformity certifications.",
      feedback_description: "All information is now up to date and verified.",
      control_id: controls[128],
    },
    {
      title:
        "We engage with notified bodies or conduct internal conformity assessments.",
      description:
        "Collaboration with notified bodies or conducting internal reviews ensures rigorous evaluation of AI system compliance.",
      order_no: 1,
      status: "In progress",
      risk_review: "Residual risk",
      approver: userId1,
      owner: userId2,
      reviewer: userId1,
      due_date: new Date("2024-06-15"),
      implementation_details:
        "Initiated internal assessments and began collaboration with notified bodies",
      evidence_description:
        "Internal audit reports and notified body assessment results",
      feedback_description: "Ongoing collaboration with external bodies",
      control_id: controls[129],
    },
    {
      title:
        "We establish processes to respond to national authority requests.",
      description:
        "Well-defined processes enable efficient and accurate responses to regulatory inquiries or audits.",
      order_no: 1,
      status: "Waiting",
      risk_review: "Unacceptable risk",
      approver: userId1,
      owner: userId2,
      reviewer: userId1,
      due_date: new Date("2024-07-01"),
      implementation_details:
        "Documenting and setting up internal processes for regulatory inquiries",
      evidence_description:
        "Standard operating procedures (SOP) for responding to authority requests",
      feedback_description: "Need further alignment on procedures",
      control_id: controls[130],
    },
    {
      title: "We maintain thorough documentation of AI system conformity.",
      description:
        "Comprehensive conformity documentation demonstrates adherence to legal standards and supports regulatory reporting.",
      order_no: 1,
      status: "Done",
      risk_review: "Acceptable risk",
      approver: userId1,
      owner: userId2,
      reviewer: userId1,
      due_date: new Date("2024-05-15"),
      implementation_details:
        "Completed AI system conformity documentation for reporting",
      evidence_description:
        "Compliance documentation and regulatory submissions",
      feedback_description: "Successfully met all compliance requirements",
      control_id: controls[131],
    },
    {
      title: "We keep records of registration and any subsequent updates.",
      description:
        "Detailed records of registration activities provide transparency and facilitate compliance verification.",
      order_no: 2,
      status: "In progress",
      risk_review: "Residual risk",
      approver: userId1,
      owner: userId2,
      reviewer: userId1,
      due_date: new Date("2024-06-20"),
      implementation_details:
        "Developed a centralized registry for tracking AI system updates",
      evidence_description: "Registration documents and update logs",
      feedback_description:
        "Further work needed on the central database integration",
      control_id: controls[131],
    },
    {
      title: "We ensure timely and accurate data entry into the EU database.",
      description:
        "Ensuring timely updates maintains regulatory compliance and fosters trust in system integrity and monitoring processes.",
      order_no: 1,
      status: "Done",
      risk_review: "Acceptable risk",
      approver: userId1,
      owner: userId2,
      reviewer: userId1,
      due_date: new Date("2024-05-01"),
      implementation_details:
        "All required data entries completed in the EU database",
      evidence_description: "Database update logs and compliance confirmations",
      feedback_description: "Data entry process completed smoothly",
      control_id: controls[132],
    },
    {
      title: "We define methods and tools for measuring AI system impacts.",
      description:
        "Establishing methods and tools ensures consistent evaluation of AI system effects on users, stakeholders, and society.",
      order_no: 1,
      status: "Done",
      risk_review: "Acceptable risk",
      approver: userId1,
      owner: userId2,
      reviewer: userId1,
      due_date: new Date("2024-06-01"),
      implementation_details: "Developed a set of AI impact assessment tools",
      evidence_description: "Impact assessment reports and tools documentation",
      feedback_description:
        "Tools are effective in identifying AI system impacts",
      control_id: controls[133],
    },
    {
      title: "We monitor AI system operations based on usage instructions.",
      description:
        "Monitoring ensures systems operate within intended parameters and quickly identifies deviations.",
      order_no: 1,
      status: "In progress",
      risk_review: "Residual risk",
      approver: userId1,
      owner: userId2,
      reviewer: userId1,
      due_date: new Date("2024-06-15"),
      implementation_details:
        "Set up continuous monitoring tools for AI systems",
      evidence_description: "System monitoring logs and dashboards",
      feedback_description:
        "Monitoring system has helped identify deviations early",
      control_id: controls[134],
    },
    {
      title:
        "We track and respond to errors and incidents through measurable activities.",
      description:
        "Effective tracking and response minimize the impact of errors and improve system resilience and compliance.",
      order_no: 1,
      status: "Done",
      risk_review: "Unacceptable risk",
      approver: userId1,
      owner: userId2,
      reviewer: userId1,
      due_date: new Date("2024-05-10"),
      implementation_details:
        "Implemented an error tracking and response system",
      evidence_description: "Incident logs, response actions, and resolutions",
      feedback_description: "The system ensures quick recovery and compliance",
      control_id: controls[135],
    },
    {
      title: "We consult with experts and end-users to inform risk management.",
      description:
        "Input from diverse perspectives ensures risk management strategies are comprehensive and practical.",
      order_no: 1,
      status: "In progress",
      risk_review: "Acceptable risk",
      approver: userId1,
      owner: userId2,
      reviewer: userId1,
      due_date: new Date("2024-07-01"),
      implementation_details:
        "Conducted expert and user consultations for risk assessment",
      evidence_description: "Consultation summaries and reports",
      feedback_description:
        "Stakeholders provided valuable insights for risk management",
      control_id: controls[136],
    },
    {
      title:
        "We continuously evaluate if AI systems meet objectives and decide on ongoing deployment.",
      description:
        "Regular evaluations ensure systems continue to fulfill their intended purpose and remain aligned with organizational goals.",
      order_no: 1,
      status: "Done",
      risk_review: "Acceptable risk",
      approver: userId1,
      owner: userId2,
      reviewer: userId1,
      due_date: new Date("2024-06-20"),
      implementation_details: "Set up periodic AI system evaluations",
      evidence_description: "Evaluation reports and deployment decisions",
      feedback_description:
        "Ongoing evaluations ensure alignment with business goals",
      control_id: controls[137],
    },
    {
      title: "We document pre-determined changes and performance metrics.",
      description:
        "Documentation of changes and metrics supports traceability and ensures that modifications are aligned with compliance.",
      order_no: 2,
      status: "Done",
      risk_review: "Residual risk",
      approver: userId1,
      owner: userId2,
      reviewer: userId1,
      due_date: new Date("2024-06-30"),
      implementation_details:
        "Established a system for documenting changes and metrics",
      evidence_description: "Change logs and performance metric records",
      feedback_description: "Documentation process has enhanced traceability",
      control_id: controls[137],
    },
    {
      title:
        "We regularly review and update AI systems to maintain regulatory compliance.",
      description:
        "Regular reviews ensure AI systems evolve in line with regulatory changes and industry standards.",
      order_no: 3,
      status: "In progress",
      risk_review: "Unacceptable risk",
      approver: userId1,
      owner: userId2,
      reviewer: userId1,
      due_date: new Date("2024-08-01"),
      implementation_details:
        "Scheduled regular reviews of AI systems for compliance",
      evidence_description: "Review schedules and updated compliance records",
      feedback_description: "Regulatory updates are being tracked and applied",
      control_id: controls[137],
    },
    {
      title:
        "We ensure that any system changes are documented and assessed for compliance.",
      description:
        "Thorough documentation and assessment of changes prevent compliance gaps and support accountability.",
      order_no: 4,
      status: "Done",
      risk_review: "Acceptable risk",
      approver: userId1,
      owner: userId2,
      reviewer: userId1,
      due_date: new Date("2024-06-15"),
      implementation_details:
        "Implemented a compliance review system for AI system changes",
      evidence_description:
        "Change documentation and compliance assessment records",
      feedback_description:
        "All system changes are now fully documented and assessed",
      control_id: controls[137],
    },
    {
      title:
        "We implement processes to capture and integrate unexpected impact inputs.",
      description:
        "Capturing unforeseen impacts helps refine systems and address emerging risks proactively.",
      order_no: 1,
      status: "Done",
      risk_review: "Acceptable risk",
      approver: userId1,
      owner: userId2,
      reviewer: userId1,
      due_date: new Date("2024-06-01"),
      implementation_details:
        "Established a process for capturing unexpected impact data and incorporating it into system updates.",
      evidence_description:
        "Integration of feedback loop into development and deployment phases.",
      feedback_description:
        "Effective identification and integration of unexpected impacts.",
      control_id: controls[138],
    },
    {
      title: "We assess AI model capabilities using appropriate tools.",
      description:
        "Capability assessments verify that AI models perform as intended and meet required safety and quality standards.",
      order_no: 1,
      status: "Done",
      risk_review: "Acceptable risk",
      approver: userId1,
      owner: userId2,
      reviewer: userId1,
      due_date: new Date("2024-06-01"),
      implementation_details:
        "Implemented assessment procedures using AI performance and safety evaluation tools.",
      evidence_description: "Assessment reports and validation checklists.",
      feedback_description:
        "Thorough capability assessments provide confidence in model safety.",
      control_id: controls[139],
    },
    {
      title: "We develop plans to address unexpected risks as they arise.",
      description:
        "Proactive risk plans ensure quick and effective responses to emerging challenges or unforeseen issues.",
      order_no: 1,
      status: "Done",
      risk_review: "Acceptable risk",
      approver: userId1,
      owner: userId2,
      reviewer: userId1,
      due_date: new Date("2024-06-01"),
      implementation_details:
        "Created and deployed risk mitigation strategies for handling unforeseen events.",
      evidence_description:
        "Risk management plans and mitigation strategy documentation.",
      feedback_description:
        "Responsive and adaptive risk management processes.",
      control_id: controls[140],
    },
    {
      title: "We monitor and respond to incidents post-deployment.",
      description:
        "Post-deployment monitoring identifies and mitigates issues, ensuring continued compliance and system reliability.",
      order_no: 2,
      status: "In progress",
      risk_review: "Residual risk",
      approver: userId1,
      owner: userId2,
      reviewer: userId1,
      due_date: new Date("2024-07-01"),
      implementation_details:
        "Active monitoring systems are in place to identify and resolve incidents after deployment.",
      evidence_description:
        "Incident logs, resolution reports, and monitoring system dashboards.",
      feedback_description:
        "Incident response times and resolution efficiency have been improved.",
      control_id: controls[140],
    },
    {
      title:
        "We ensure providers implement systems for capturing and storing AI system logs.",
      description:
        "Logging systems provide traceability, aiding audits and troubleshooting while supporting regulatory requirements.",
      order_no: 1,
      status: "Done",
      risk_review: "Acceptable risk",
      approver: userId1,
      owner: userId2,
      reviewer: userId1,
      due_date: new Date("2024-06-01"),
      implementation_details:
        "Mandated that providers implement robust logging systems for tracking AI operations.",
      evidence_description:
        "Log files, audit trails, and provider system documentation.",
      feedback_description:
        "Logs are comprehensive, aiding system troubleshooting and audits.",
      control_id: controls[141],
    },
    {
      title:
        "We immediately report serious incidents to providers, importers, distributors, and relevant authorities.",
      description:
        "Prompt reporting ensures accountability and timely resolution of incidents, minimizing potential harm.",
      order_no: 1,
      status: "Done",
      risk_review: "Acceptable risk",
      approver: userId1,
      owner: userId2,
      reviewer: userId1,
      due_date: new Date("2024-06-01"),
      implementation_details:
        "Developed an incident reporting protocol that immediately notifies all relevant parties.",
      evidence_description:
        "Incident reports and communication logs with authorities.",
      feedback_description:
        "Efficient and prompt communication during serious incidents.",
      control_id: controls[142],
    },
    {
      title:
        "We implement processes to capture and integrate unexpected impact inputs.",
      description:
        "Capturing unforeseen impacts helps refine systems and address emerging risks proactively.",
      order_no: 1,
      status: "Done",
      risk_review: "Acceptable risk",
      approver: userId1,
      owner: userId2,
      reviewer: userId1,
      due_date: new Date("2024-06-01"),
      implementation_details:
        "Implemented a system to track and assess unexpected impacts based on user feedback and ongoing data analysis.",
      evidence_description: "Impact reports and integration processes",
      feedback_description:
        "Positive feedback from risk management team regarding the process",
      control_id: controls[143],
    },
    {
      title: "We assess AI model capabilities using appropriate tools.",
      description:
        "Capability assessments verify that AI models perform as intended and meet required safety and quality standards.",
      order_no: 1,
      status: "Done",
      risk_review: "Acceptable risk",
      approver: userId1,
      owner: userId2,
      reviewer: userId1,
      due_date: new Date("2024-07-15"),
      implementation_details:
        "Utilized testing frameworks and tools such as ModelValidator to ensure AI models meet the standards.",
      evidence_description: "Assessment reports and tool outputs",
      feedback_description:
        "Satisfactory evaluations from model assessment team",
      control_id: controls[144],
    },
    {
      title: "We develop plans to address unexpected risks as they arise.",
      description:
        "Proactive risk plans ensure quick and effective responses to emerging challenges or unforeseen issues.",
      order_no: 1,
      status: "In progress",
      risk_review: "Residual risk",
      approver: userId1,
      owner: userId2,
      reviewer: userId1,
      due_date: new Date("2024-08-10"),
      implementation_details:
        "Developing risk mitigation plans with predefined action steps based on AI system performance.",
      evidence_description: "Draft risk response plans and simulation results",
      feedback_description: "Awaiting feedback from senior management",
      control_id: controls[145],
    },
    {
      title: "We monitor and respond to incidents post-deployment.",
      description:
        "Post-deployment monitoring identifies and mitigates issues, ensuring continued compliance and system reliability.",
      order_no: 2,
      status: "Done",
      risk_review: "Acceptable risk",
      approver: userId1,
      owner: userId2,
      reviewer: userId1,
      due_date: new Date("2024-06-30"),
      implementation_details:
        "Implemented a continuous monitoring system that tracks key AI performance metrics post-deployment.",
      evidence_description: "Incident logs and resolution reports",
      feedback_description: "No major incidents, ongoing system reliability",
      control_id: controls[145],
    },
    {
      title:
        "We ensure providers implement systems for capturing and storing AI system logs.",
      description:
        "Logging systems provide traceability, aiding audits and troubleshooting while supporting regulatory requirements.",
      order_no: 1,
      status: "In progress",
      risk_review: "Residual risk",
      approver: userId1,
      owner: userId2,
      reviewer: userId1,
      due_date: new Date("2024-09-01"),
      implementation_details:
        "Collaborating with third-party providers to integrate logging systems that comply with industry standards.",
      evidence_description: "Integration plans and log system designs",
      feedback_description:
        "Providers are reviewing final implementation details",
      control_id: controls[146],
    },
    {
      title:
        "We immediately report serious incidents to providers, importers, distributors, and relevant authorities.",
      description:
        "Prompt reporting ensures accountability and timely resolution of incidents, minimizing potential harm.",
      order_no: 1,
      status: "Done",
      risk_review: "Acceptable risk",
      approver: userId1,
      owner: userId2,
      reviewer: userId1,
      due_date: new Date("2024-05-20"),
      implementation_details:
        "Established a reporting protocol with clear guidelines for immediate incident escalation.",
      evidence_description:
        "Incident reports and confirmation receipts from authorities",
      feedback_description:
        "Fast response and resolution for all reported incidents",
      control_id: controls[147],
    },
  ];
};
