import Box from '../Box';
import Label from '../Label';
import ContentHeader from '../ContentHeader';

export default function EDVKnowledge() {
    return (
        <Box className="mb-5" title="EDV-Kenntnisse">
            <div className="flex-1">
                <ol className="list-disc list-inside mb-3">
                    <li>Microsoft Office Produkte</li>
                    <li className="mb-2">Microsoft Teams</li>
                    <li>XMind</li>
                    <li>PapDesigner</li>
                    <li>Anaconda</li>
                    <li className="mb-2">Oracle VM VirtualBox</li>
                    <li>macOS</li>
                    <li>Windows</li>
                    <li className="mb-2">Ubuntu</li>
                    <li>Microsoft Visual Studio Code</li>
                    <li>Jira</li>
                    <li>GitHub</li>
                    <li>Docker</li>
                    <li className="mb-2">Scrum, Kanban und OKR</li>
                    <li>PuTTY</li>
                    <li>WinSCP</li>
                    <li>FileZilla</li>
                </ol>
            </div>
        </Box>
    );
}
