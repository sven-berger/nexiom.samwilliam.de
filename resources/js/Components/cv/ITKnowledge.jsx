import Box from '../Box';
import Label from '../Label';
import ContentHeader from '../ContentHeader';

export default function ITKnowledge() {
    return (
        <Box className="mb-5" title="IT-Kenntnisse">
            <div className="flex-1">
                <ol className="list-disc list-inside mb-3">
                    <li>PHP</li>
                    <li>Laravel</li>
                    <li>HTML</li>
                    <li>Bootstrap</li>
                    <li>TailwindCSS</li>
                    <li>MySQL</li>
                    <li>JavaScript</li>
                    <li>React.js</li>
                    <li>Stimulus</li>
                </ol>
            </div>
        </Box>
    );
}
